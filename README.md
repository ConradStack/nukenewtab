# New Tab Override Extension

A Microsoft Edge extension that replaces the default new tab page with a minimal, clean black page.

## Features

- Minimalist design with clean black background
- Replaces the default new tab page
- No distractions or unnecessary elements
- Simple and lightweight implementation

## Installation

### Local Development

1. Clone or download this repository
2. Open Microsoft Edge and navigate to `edge://extensions/`
3. Enable "Developer mode" using the toggle in the bottom-left corner
4. Click "Load unpacked" and select the folder containing the extension files
5. The extension should now be installed and active

### From Edge Add-ons Store

*Note: This extension is not yet available in the Edge Add-ons Store.*

## Usage

Once installed, simply open a new tab in Edge to see the custom new tab page. You can:

- Use the search bar to search the web with Bing
- Click on any quick link to visit that website
- Add new links using the "Add New Link" button
- Delete links by hovering over them and clicking the X button

## Customization

The extension stores your quick links in the browser's local storage. You can customize:

- The links shown on the new tab page
- Each link's title and URL

## Development

### Project Structure

- `manifest.json` - Extension manifest file
- `newtab.html` - HTML for the custom new tab page
- `styles.css` - CSS styling for the new tab page
- `newtab.js` - JavaScript functionality
- `icons/` - Extension icons

### Building

This extension doesn't require any build process. You can modify the files directly and reload the extension to see changes.

## License

MIT
