# Secure Healthcare Insurance App

React.js-based healthcare web application, deployed on Azure Web Apps, features robust login and registration processes authenticated by Pangea, and authenticated by Auth0, a leading identity management platform. It leverages the Pangea library for enhanced security, which includes checking user IPs to determine legitimacy and detect proxy use. After successful login, users can download and review an insurance test form, add necessary details, and then upload it back to the application. The upload process includes a Pangea file scan to ensure the file is free from malware. Once validated, the file can safely be uploaded to AWS S3. Through these steps, Pangea Cloud services effectively safeguard the login, registration, and file upload processes.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Features](#features)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)

## Installation

To install this project, clone the repository using the following link:

[Secure Healthcare Insurance App](https://github.com/TWILIGHTCLOUDCODERZ/Pangea-Securathon-Showdown.git)

Then, run these commands:


git clone https://github.com/TWILIGHTCLOUDCODERZ/Pangea-Securathon-Showdown.git
cd SecureHealthcareInsuranceApp
npm install

## Environment Variables

You need to set up the following environment variables to configure your project correctly:

- **Pangea API Token**: Follow [this document](https://pangea.cloud/docs/domain-intel/getting-started/) for instructions on how to obtain and configure your Pangea API token.
- **AWS S3 Configuration**: Comprehensive setup instructions for AWS S3 can be found in [this document](https://repost.aws/knowledge-center/read-access-objects-s3-bucket).
- **Auth0 Configuration**: To configure Auth0, refer to [this document](https://auth0.com/docs/get-started/auth0-overview/create-applications) for detailed guidance.

### Adding Environment Variables

Add these variables to a `.env` file located in the root of your project. This file should not be tracked by version control to protect your secrets.

REACT_APP_AWS_ACCESS_KEY_ID=your_aws_access_key_id
REACT_APP_AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
REACT_APP_AWS_REGION=your_aws_region
REACT_APP_S3_BUCKET=your_s3_bucket_name
REACT_APP_API_SCAN_ENDPOINT=your_pangea_api_endpoint
REACT_APP_AUTH_TOKEN=your_auth0_token
