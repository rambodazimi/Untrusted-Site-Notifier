# Untrusted-Site-Notifier

You can add this extension to your Google Chrome browser with this link:
https://chrome.google.com/webstore/detail/untrusted-site-notifier/bccbfjgkfcndbgdkeplpiabkjfhloljj?utm_source=ext_sidebar&hl=en-US

A Chrome Extension that detects potential phishing websites and unsecured connections

## Technical Overview and Implementation

### Architecture
The "Untrusted Site Notifier" Chrome extension is designed as a background script that leverages various Chrome APIs to monitor and analyze web navigation, assess URL security, and provide timely notifications to users.

### Key Components
Background Script (background.js): This script is the core of the extension. It listens for the webNavigation.onCompleted event, which fires when a navigation is completed. The script then applies various techniques to analyze the URL and connection security before triggering notifications if necessary.

Notifications (chrome.notifications API): The extension uses the chrome.notifications API to display notifications to the user. Notifications are created when potential phishing sites or unsecured connections are detected.

SSL/TLS Analysis: The extension uses the URL's protocol to determine if the connection is secure (HTTPS) or not (HTTP).

Real-time API Integration: The extension integrates with an external phishing detection API to perform real-time checks against an external database. The fetch API is used to send the URL to the API and receive the response.

### Implementation Steps
Here's an outline of the implementation steps:

Create the manifest.json file to declare the extension's permissions, icons, and background script.

Implement the background.js script:

Set up the chrome.webNavigation.onCompleted event listener.

Extract the URL and analyze it using various techniques (phishing detection, SSL/TLS analysis, suspicious keyword recognition, domain trustworthiness, real-time API lookup).

Display notifications using the chrome.notifications API when a potential threat is detected.

Implement the various functions for phishing detection, and real-time API integration.

Include icons (such as "warning.png") for notifications and specify their paths in the manifest.

Test the extension on different websites to ensure accurate detection and notification.

Optionally, provide user customization options, such as enabling/disabling specific techniques or managing trusted domains.

Prepare a concise and informative user interface for the extension's popup or settings page.

Package the extension and upload it to the Chrome Web Store.

### Note
While the technical implementation outlined here provides a high-level overview, the specific details may vary based on your coding style, architecture, and any external services you choose to integrate with for real-time API lookups. Be sure to follow the Chrome Extension Developer Documentation and API references for accurate implementation and best practices.

## Documentation

### 1. Introduction
Welcome to the comprehensive documentation for Untrusted Site Notifier, your essential Chrome extension for enhancing online security by detecting potential phishing websites and alerting you about unsecured connections. This documentation provides a detailed guide on how to install, use, and make the most of the extension's features.

### 2. Installation
To install Untrusted Site Notifier, follow these steps:

Open Google Chrome.

Visit the Chrome Web Store and search for "Untrusted Site Notifier".

Click on the extension listing to open the details page.

Click the "Add to Chrome" button.

Confirm the installation by clicking "Add Extension" in the pop-up.

Untrusted Site Notifier is now added to your Chrome browser.

### 3. Usage
Untrusted Site Notifier operates seamlessly in the background while you browse the web. It proactively identifies potential phishing websites and unsecured connections. Here's how to use the extension:

As you navigate websites, the extension automatically analyzes URLs and connection security.

If the extension detects a potential phishing site or an unsecured connection, you'll receive a notification.

### 4. Features
Untrusted Site Notifier offers the following features to enhance your online security:

SSL/TLS Analysis: Unsecured HTTP connections trigger notifications, helping you avoid sharing sensitive information on unencrypted sites.

Real-time API Integration: Utilizes real-time phishing detection services for up-to-date protection.

### 5. Contact and Support
For any inquiries or assistance, please reach out to me at rambod.azm@gmail.com or visit my website at http://www.rambodazimi.com
