const { nanoid } = require('nanoid')
const URL = require('../models/url')
async function handleURL(req, res) {
    const body = req.body;
 
    if (!body.url) return res.status(404).json({ err: "Bad Request" })
    const shortID = nanoid(8)
    await URL.create({
        shordId: shortID,
        redirectURL: body.url,
        vistHistory: [],
    });
    return res.render("home",{
        id:  shortID
    })
    
    
    
 
}
async function hanleAnalytics(req, res) {
    const shordId = req.params.shordId;

    const result = await URL.findOne({ shordId });
    return res.json({
        totalClick: result.vistHistory.length,
        analytics: result.vistHistory
    })

}



module.exports = {
    handleURL,
    hanleAnalytics
}