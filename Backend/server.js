const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()
const mongoose = require('mongoose')
const mongoDBuri = process.env.MONGODB_URI
const routes = require('./routes')

app.use(express.json());

// Server run check 
app.get('/', (req, res) => {
    res.send("Server is running successfully")
})

// Home endpoint to make sure evrything is fine!
app.get('/home', (req, res) => {
    res.send("Hey there, it's me Arthi ")
})

// MongoDB connection
// <-------
// Connecting mongoDB to server
mongoose.connect(mongoDBuri)
.then(() =>{ console.log("Database connection successful") }
).catch((err)=>{
    console.log("Database connection unsuccessful \n",err)
})

// MondoDB connection check
app.get('/mongoDbconn', (req,res) => {
    if(mongoose.connection.readyState === 1){
        res.send("Database connection : Connected!! :) ")
    }else{
        res.send("Database connection : Disconnected!! :( ")
    }
})
// ----->

// Calling router 
app.use('/',routes)


if (require.main === module){
    app.listen(port, () => {
        console.log("Server is running on port 3000")
    })
}