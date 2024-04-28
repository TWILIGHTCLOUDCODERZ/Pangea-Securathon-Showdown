# Secure Healthcare Insurance App

React.js-based healthcare web application, deployed on Azure Web Apps, features robust login and registration processes authenticated by Pangea,and autheticated by auth0 a leading identity management platform. It leverages the Pangea library for enhanced security, which includes checking user IPs to determine legitimacy and detect proxy use. After successful login, users can download and review an insurance test form, add necessary details, and then upload it back to the application. The upload process includes a Pangea file scan to ensure the file is free from malware. Once validated, the file can safely be uploaded to AWS S3. Through these steps, Pangea Cloud services effectively safeguard the login, registration, and file upload processes

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)

## Installation

To install this project, clone the repository using the following link:

[https://github.com/TWILIGHTCLOUDCODERZ/Pangea-Securathon-Showdown.git](https://github.com/TWILIGHTCLOUDCODERZ/Pangea-Securathon-Showdown.git)

Then, run these commands:

```bash
git clone https://github.com/TWILIGHTCLOUDCODERZ/Pangea-Securathon-Showdown.git
cd yourprojectname
npm install

