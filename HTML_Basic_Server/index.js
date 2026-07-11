const console = require('console');
const fs = require('fs')
const http = require('http');

const myServer = http.createServer((req, res) => {
    // console.log("New Server Request");
    // console.log(req)
    const log = `${Date.now()}: New Request Recieved  form  ${req.url}\n`
    fs.appendFile('log.txt', log, (err, data) => {
        switch (req.url) {
            case "/":
                res.end("Welcome to server")
                break;
            case "/about":
                res.end("I will tell you later I am busy")
                break;
            case "/contact":
                res.write("Just 1 minute...\n");
                setTimeout(() => {
                    res.end("0370 61 68 427")
                }, 5000)
                break;
            default:
                 res.end("404 Page Not Found");
                break;
        }

    })
});
myServer.listen(8000, () => console.log("Server Started"));
