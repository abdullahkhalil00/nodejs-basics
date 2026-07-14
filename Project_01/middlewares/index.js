const fs = require('fs')

function logRequestResponse(filename) {
    return (req,res,next) =>{
         fs.appendFile(filename, `\n ${Date.now()} , Methond ${req.method} , path ${req.method}`, (err, data) => {
        next()
    })
    }
}
module.exports = {
    logRequestResponse,
}