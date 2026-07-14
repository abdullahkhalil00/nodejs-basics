const express = require('express');
const app = express()
// const users = require('./MOCK_DATA.json')
const fs = require('fs')
const mongoose = require("mongoose");
const { type } = require('os');
const { timeStamp } = require('console');


//connect with monogo database First we make schema and then model to get , post , fetch etc 
mongoose.connect('mongodb://127.0.0.1:27017/project_01')
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err))

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

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
    console.log("Middle ware 2")
    req.myUserName = "Khalil"
    // return res.json({msg:"Middleware 2"})
    next();
})
app.use((req, res, next) => {
    console.log("Middle ware 3", req.myUserName)
    //  return res.json({msg:"Middleware 3"})
    next();
})
app.use((req, res, next) => {
    fs.appendFile('log.txt', `\n ${Date.now()} , Methond ${req.method} , path ${req.method}`, (err, data) => {
        next()
    })
})


app.get('/users', async (req, res) => {
    const allDBUser = await makeUser.find({})
    const html = `
    <ul>
${allDBUser.map((user) => {
        return `<li>${user.firstName}  ${user.email}</li>`;
    }).join("")}
</ul>
    `
    res.send(html)
})

app
    .route("/api/users/:id")
    .get(async (req, res) => {
        const id = await makeUser.findById(req.params.id)

        return res.json(id)
    })
    .post(async (req, res) => {
        const body = req.body
        if (
            !body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title
        ) {
            return res.status(400).json({ msg: "All Field Required" })
        }
        const result = await makeUser.create({
            firstName: body.first_name,
            lastName: body.last_name,
            gender: body.gender,
            email: body.email,
            jobTitle: body.job_title,
        });
        console.log(result)
        return res.status(201).json({ msg: "User Created" })
    })
    .patch(async (req, res) => {
        await makeUser.findByIdAndUpdate(req.params.id, { lastName: "Changed" })

        return res.json({ status: "Changed" })



    })
    .delete(async (req, res) => {
        await makeUser.findByIdAndDelete(req.params.id, { lastName: "Changed" })

        return res.json({ status: "Deleted" })
    })

const Port = 8000;
app.listen(Port, () => console.log("Server Started"))