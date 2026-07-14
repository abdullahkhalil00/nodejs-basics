const express = require('express')
const app = express()
const PORT = 8001
const urlRoute = require('./router/url')
const URL = require('./models/url')
const { connectToMongoose } = require('./connection/connection')


connectToMongoose('mongodb://127.0.0.1:27017/short_url')
.then(() =>console.log("Connected"))
app.use(express.json())
app.use('/url',urlRoute)
app.get('/:shortID',async(req,res) =>{
    const shordId = req.params.shortID;
    const entry = await URL.findOneAndUpdate({
        shordId
    },{
        $push :{
            vistHistory:{
                timestamp:Date.now()
            }
        }
    })
 res.redirect(entry.redirectURL)   
}
)


app.listen(PORT , () => console.log("Server Started"))