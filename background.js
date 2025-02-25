/**
 * Background service worker for the Chrome extension
 * Initializes default settings when the extension is installed
 */
chrome.runtime.onInstalled.addListener(() => {
    // Set default configuration values
    chrome.storage.sync.set({
        theme: 'light',          // Default theme setting
        primaryColor: '#10A37F', // Default accent color
        apiKey: ''              // Empty API key by default
    });
});