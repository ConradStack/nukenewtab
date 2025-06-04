# Loading the Extension in Microsoft Edge

To load and test this extension in Microsoft Edge:

1. Open Microsoft Edge
2. Navigate to `edge://extensions/`
3. Toggle on "Developer mode" in the bottom-left corner if it's not already enabled
4. Click "Load unpacked" 
5. Select the folder containing this extension (the folder with manifest.json)
6. The extension should now be installed
7. Open a new tab to test it out

If you need to update the extension after making changes:

1. Go back to `edge://extensions/`
2. Find your extension
3. Click the "Reload" button (circular arrow icon)
4. Open a new tab to see the changes

To troubleshoot issues:
- Check the browser console (F12) when on a new tab page
- Ensure all paths in the manifest.json are correct
- Make sure all required files are present in the directory
