const http = require("http");
const filesModule = require("./modules/files");

const handler = (req, res) => {
    const result = 
    `
        First word: ${filesModule.getFirstWord('./text/txt')}
        Last word: ${filesModule.getLastWord('./text/txt')}
    `
    res.send(result);
}

http.createServer(handler).listen(8080);