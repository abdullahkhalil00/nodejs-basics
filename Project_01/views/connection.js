const mongoose = require("mongoose");

async function connectMongoDG(url) {
    return mongoose.connect(url)
       
}
module.exports = {
    connectMongoDG
}