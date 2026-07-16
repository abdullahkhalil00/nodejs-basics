const express = require('express')
const path = require('path')
const app = express()
const PORT = 8001
const urlRoute = require('./router/url')
const URL = require('./models/url')
const { connectToMongoose } = require('./connection/connection')
const staticRouter = require('./router/staticRouter')

connectToMongoose('mongodb://127.0.0.1:27017/short_url')
    .then(() => console.log("Connected"))
app.set("view engine", "ejs");
app.set("views", path.resolve('./views'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/",staticRouter)



app.get('/test', async (req, res) => {
    const allUrls =await URL.find({})
   
    res.render('home',{
        urls:allUrls
    })
})
app.use('/url', urlRoute)
app.get('/url/:shortID', async (req, res) => {
    const shordId = req.params.shortID;
    const entry = await URL.findOneAndUpdate(
        {
            shordId,
        },
        {
            $push: {
                vistHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );

    if (!entry) {
        return res.status(404).send("Short URL not found");
    }

    res.redirect(entry.redirectURL);

}
)


app.listen(PORT, () => console.log("Server Started")) 