const express = require('express');
const app = express()
// const users = require('./MOCK_DATA.json')


const userRouter = require('./routes/user')
const {connectMongoDb} = require('./views/connection')
const {fileWriter} = require('./middlewares')

//connect with monogo database First we make schema and then model to get , post , fetch etc 






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
app.use(fileWriter('log.txt'))

app.use('/user' , userRouter)
connectMongoDb('mongodb://127.0.0.1:27017/project_01')
const Port = 8000;
app.listen(Port, () => console.log("Server Started"))