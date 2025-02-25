# OpenAI Chat Chrome Extension

A Chrome extension for chatting with OpenAI's GPT models directly from your browser.

## Features
- Support for GPT-3.5 and GPT-4 models
- Dark/Light theme
- Customizable accent colors
- Local storage for chat history
- Markdown support for responses
- Secure API key storage

## Project Structure

project/
├── icons/
│ ├── icon16.png
│ ├── icon48.png
│ └── icon128.png
├── lib/
│ ├── default.min.css
│ ├── highlight.min.js
│ └── marked.min.js
├── background.js
├── popup.html
├── popup.js
├── styles.css
└── README.md

## Installation
1. Clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the extension directory
5. Add your OpenAI API key in the extension settings

## Usage
1. Click the extension icon in Chrome
2. Enter your OpenAI API key in settings
3. Start chatting with the AI

## License
MIT