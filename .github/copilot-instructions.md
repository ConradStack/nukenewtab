<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Project Instructions

This is a Microsoft Edge browser extension project that replaces the default new tab page with a custom one.

## Project Details

- This extension uses the `chrome_url_overrides` feature to replace the new tab page
- The core files are manifest.json, newtab.html, styles.css, and newtab.js
- The extension uses local storage to save user preferences for quick links
- The extension follows Microsoft Edge extension design guidelines

## Code Specifics

When making changes to this code:
- Ensure the manifest.json follows the Manifest V3 specifications
- CSS should maintain the responsive design for all screen sizes
- JavaScript should focus on maintaining user preferences across browser sessions
- Check that all features work in Microsoft Edge browser environment
