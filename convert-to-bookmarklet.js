const fs = require('fs');
const util = require('util');
const readline = require('readline');

const readFile = util.promisify(fs.readFile);
const fileExists = util.promisify(fs.exists);

async function convertJSFileToBookmarklet(filePath) {
    try {
        if (!await fileExists(filePath)) {
            throw new Error(`File does not exist: ${filePath}`);
        }

        let content = await readFile(filePath, 'utf-8');

        if (!content || !content.trim()) {
            throw new Error(`File is empty or only contains whitespace: ${filePath}`);
        }

        // Check if the content already starts with 'javascript:(function ()'
        if (!content.trim().match(/^javascript\s*:\s*\(function\s*\(\)\s*\)/)) {
            // If it doesn't, wrap it
            content = `javascript:(function(){${content.trim()}})()`;
        }

        // Encode everything except 'javascript:'
        const bookmarklet = 'javascript:' + encodeURIComponent(content.slice(11));

        console.log(bookmarklet);

        const clipboardy = await import('clipboardy');
        clipboardy.default.writeSync(bookmarklet);

        console.log("Bookmarklet copied to clipboard!");
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the file path: ', (filePath) => {
    convertJSFileToBookmarklet(filePath);
    rl.close();
});
