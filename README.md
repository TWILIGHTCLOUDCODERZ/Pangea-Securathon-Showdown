# Secure Healthcare Insurance App

React.js-based healthcare web application, deployed on Azure Web Apps, features robust login and registration processes authenticated by Pangea, and authenticated by Auth0, a leading identity management platform. It leverages the Pangea library for enhanced security, which includes checking user IPs to determine legitimacy and detect proxy use. After successful login, users can download and review an insurance test form, add necessary details, and then upload it back to the application. The upload process includes a Pangea file scan to ensure the file is free from malware. Once validated, the file can safely be uploaded to AWS S3. Through these steps, Pangea Cloud services effectively safeguard the login, registration, and file upload processes.

[![Video Title](http://img.youtube.com/vi/VIDEO_ID/0.jpg)]([http://www.youtube.com/watch?v=VIDEO_ID](https://youtu.be/iiBftlKpyQw?si=cM123Qdf00QbRHY_) "Video Title")

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Run-Build](#run-Build)
- [Features](#features)
- [Usage](#usage)
- [License](#license)

## Installation

To install this project, clone the repository using the following link:

[Secure Healthcare Insurance App](https://github.com/TWILIGHTCLOUDCODERZ/Pangea-Securathon-Showdown.git)

Then, run these commands:

`git clone https://github.com/TWILIGHTCLOUDCODERZ/Pangea-Securathon-Showdown.git`

`cd SecureHealthcareInsuranceApp`

`npm install`


## Environment Variables

Set up the following environment variables to configure our project correctly:

- **Pangea API Token**: Follow [this document](https://pangea.cloud/docs/domain-intel/getting-started/) for instructions on how to obtain and configure your Pangea API token.
- **AWS S3 Configuration**: Comprehensive setup instructions for AWS S3 can be found in [this document](https://repost.aws/knowledge-center/read-access-objects-s3-bucket).
- **Auth0 Configuration**: To configure Auth0, refer to [this document](https://auth0.com/docs/get-started/auth0-overview/create-applications) for detailed guidance.

### Adding Environment Variables

Add these variables to a `.env` file located in the root of our project.

REACT_APP_AWS_ACCESS_KEY_ID=your_aws_access_key_id

REACT_APP_AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key

REACT_APP_AWS_REGION=your_aws_region

REACT_APP_S3_BUCKET=your_s3_bucket_name

REACT_APP_API_SCAN_ENDPOINT=your_pangea_api_endpoint

REACT_APP_AUTH_TOKEN=your_auth0_token

## Run-Build
To start the application run the command npm start
`npm start`
This will start the application on http://localhost:3000. Navigate to this URL in the web browser to access the app
To deploy the application run the command npm build
`npm build`

## Features

- Robust authentication and authorization with Auth0.
- Enhanced security checks using Pangea.
- Secure file uploads to AWS S3 after malware scanning.
- Easy to use interface for downloading and uploading insurance forms

## Usage

The Secure Healthcare Insurance App integrates several security and validation features to ensure user data protection and compliance with healthcare regulations. Here's how these features work in real-world scenarios:

### 1. Pangea Login Validation

The app provides robust authentication mechanisms. When a user attempts to log in, Pangea Cloud verifies their identity using multi-factor authentication, including biometric checks. This ensures that the login process is not only secure but also compliant with the strict healthcare regulations.

**Use Case**: A registered nurse at a clinic needs to access patient records. She enters her credentials and is then asked to verify her identity using a fingerprint scan, providing an extra layer of security before access is granted.

### 2. Pangea User Registration Validation

During the registration process, Pangea Cloud automates data validation and integrates identity verification services. This automation improves the accuracy of user data and reduces the risk of fraudulent activity.

**Use Case**: A new healthcare provider is registering to use the app. Pangea Cloud automatically verifies the provider's medical license number and other credentials against trusted databases, ensuring all information is accurate and valid.

### 3. Pangea Malware Protection and File Management

The app features advanced malware detection to safeguard system integrity. Efficient file handling capabilities ensure that any document uploaded or downloaded complies with data protection laws and is free of malware.

**Use Case**: A doctor uploads a set of scanned medical images. Before the images are stored, Pangea Cloud scans the files for malware. Thanks to Pangea's efficient file handling and rapid response times, the doctor is quickly alerted when a threat is detected and can take immediate action, ensuring that the integrity of the healthcare system's data is maintained.



## License

MIT License

Copyright (c) 2024 TCC-TWILIGHTCLOUDCODERZ - `DEEPAN`

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
