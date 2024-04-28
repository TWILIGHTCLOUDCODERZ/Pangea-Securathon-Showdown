import React, { useState, useEffect, useCallback } from 'react';
import AWS from 'aws-sdk';
import './FileUpload.css';
import backgroundImage from './background.jpg';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [allowUpload, setAllowUpload] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
  const REGION = process.env.REACT_APP_AWS_REGION;
  const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;
  const FILE_KEY = process.env.REACT_APP_FILE_KEY;

  AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: REGION,
  });

  const pollScanResults = useCallback(async (locationUrl, fileToRescan) => {
    try {
      const resultResponse = await fetch(locationUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${AUTH_TOKEN}`,
          'Content-Type': 'application/json'
        }
      });

      if (!resultResponse.ok) {
        throw new Error(`Polling failed. Status: ${resultResponse.status}`);
      }

      const resultData = await resultResponse.json();
      const verdict = resultData.result?.data?.verdict;

      if (verdict === "benign") {
        setAllowUpload(true);
        displayModal("No malware detected on file.");
      } else {
        setAllowUpload(false);
        displayModalWithRescan("Warning: Malware detected! File is not safe. Click below to rescan.", fileToRescan);
      }
    } catch (error) {
      displayModal(`Error polling scan results: ${error.message}`);
    }
  }, [AUTH_TOKEN]);

  const scanFile = useCallback(async (fileToScan, attempt = 1) => {
    const formData = new FormData();
    formData.append('request', new Blob([JSON.stringify({transfer_method: "multipart"})], {type: "application/json"}));
    formData.append('file', fileToScan);

    try {
      const response = await fetch('https://file-scan.aws.us.pangea.cloud/v1/scan', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AUTH_TOKEN}`
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Scan failed. Status: ${response.status}`);
      }

      const result = await response.json();
      pollScanResults(result.result.location, fileToScan);
    } catch (error) {
      if (attempt <= 3) {
        console.error('Scan failed, retrying...', attempt, error);
        setTimeout(() => scanFile(fileToScan, attempt + 1), 2000 * attempt); // Exponential backoff
      } else {
        console.error('Scan ultimately failed after retries.', error);
        displayModal(`File scan failed after multiple attempts: ${error.message}`);
      }
    }
  }, [pollScanResults, AUTH_TOKEN]);

  useEffect(() => {
    if (file && file.type === 'application/pdf') {
      setTimeout(() => scanFile(file), 1000); // Adding a slight delay before the first scan
    }
  }, [file, scanFile]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type === 'application/pdf') {
        setFile(selectedFile);
      } else {
        displayModal("Only PDF files are allowed.");
      }
    }
  };

  const uploadFileToS3 = async () => {
    if (!file) {
      displayModal("No file selected for upload.");
      return;
    }

    const s3 = new AWS.S3();
    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    try {
      await s3.upload(params).promise();
      displayModal("File uploaded successfully to S3.");
    } catch (err) {
      displayModal("File upload to S3 failed: " + err.message);
    }
  };

  const downloadFileFromS3 = () => {
    const s3 = new AWS.S3();
    const params = {
      Bucket: S3_BUCKET,
      Key: FILE_KEY,
      Expires: 20
    };

    s3.getSignedUrl('getObject', params, (err, url) => {
      if (err) {
        displayModal("Failed to get a signed URL for download.");
      } else {
        setDownloadUrl(url);
      }
    });
  };

  const displayModal = (message) => {
    setModalContent(message);
    setShowModal(true);
  };

  const displayModalWithRescan = (message, fileToRescan) => {
    setModalContent(
      <>
        <p>{message}</p>
        <button onClick={() => { scanFile(fileToRescan); closeModal(); }}>Rescan File</button>
      </>
    );
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="app-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h2>Test Healthcare Insurance Application</h2>
      <div className="upload-container">
        <input type="file" onChange={handleFileChange} className="file-input" />
        {allowUpload && (
          <button onClick={uploadFileToS3} className="upload-button">
            Upload File
          </button>
        )}
        <button onClick={downloadFileFromS3} className="download-button">
          Download Insurance Form
        </button>
        {downloadUrl && (
          <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="download-link">
            Download Here
          </a>
        )}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <button onClick={closeModal} className="close-button">&times;</button>
              {modalContent}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FileUpload;
