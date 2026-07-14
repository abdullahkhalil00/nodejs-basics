const console = require('console');
const fs = require('fs')

const express = require('express')
const url = require('url')


const app = express()

app.get('/' , (req,res) => {
    res.send("Welcome to Express world")
})
app.get('/about' ,(req,res) =>{
    res.send(`This is about page of express hello from ${req.query.name} `)
} )

app.listen(8000,  () => console.log("Server Started"));

