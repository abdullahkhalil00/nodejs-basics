const mongoose = require("mongoose");

const useSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    jobTitile: {
        type: String,

    },
    gender: {
        type: String
    }

},
    { timestamps: true }
)

const makeUser = mongoose.model("user", useSchema)

module.exports = makeUser;