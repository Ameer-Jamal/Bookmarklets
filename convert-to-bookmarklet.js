const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const fileExists = util.promisify(fs.exists);

async function convertJSFileToBookmarklet(filePath) {
    try {
        if (!await fileExists(filePath)) {
            throw new Error(`File does not exist: ${filePath}`);
        }

        const content = await readFile(filePath, 'utf-8');

        if (!content || !content.trim()) {
            throw new Error(`File is empty or only contains whitespace: ${filePath}`);
        }

        const bookmarklet = encodeURIComponent(`javascript:(function(){${content}})()`);

        console.log(bookmarklet);

        const clipboardy = await import('clipboardy');
        clipboardy.default.writeSync(bookmarklet);

        console.log("Bookmarklet copied to clipboard!");
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }
}

// Use the script
convertJSFileToBookmarklet('/Users/ajamal/Documents/Other-Coding-Stuff/Bookmarlets/youtube-music-hide-video.js');