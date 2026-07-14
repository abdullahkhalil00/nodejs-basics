const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shordId:{
        type:String,
        required:true,
        unique:true
    },
    redirectURL:{
        type:String,
        required:true
    },
    vistHistory:[
        {timestamp : {type : Number}}
    ]
},

{
    timestamps : true
}
)

const urls = mongoose.model("url" , urlSchema)
module.exports = urls