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
- icons/
  - icon16.png
  - icon48.png
  - icon128.png
- lib/
  - default.min.css
  - highlight.min.js
  - marked.min.js
- background.js
- popup.html
- popup.js
- styles.css
- README.md

## Installation
1. Clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the extension directory
5. Add your OpenAI API key in the extension settings

## Usage
1. Click the extension icon in Chrome
2. Enter your OpenAI API key in settings (you can get it from OpenAI dashboard)
3. Choose your preferred model (GPT-3.5 or GPT-4)
4. Start chatting with the AI
5. Use settings to customize theme and accent colors

## Development
The extension is built using:
- HTML/CSS/JavaScript
- Chrome Extension Manifest V3
- OpenAI API
- Marked.js for Markdown rendering
- Highlight.js for code syntax highlighting

## Future Improvements
- Support for more OpenAI models
- Chat history export/import
- Custom system prompts
- Message formatting options
- Conversation templates

## License
MIT