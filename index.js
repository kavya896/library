var express = require("express");
var app = express();
var router = require("./router/register.js")
var note = require("./router/note.js")
var mongoose = require("mongoose")
var cors = require("cors")
require("dotenv").config()
var PORT = process.env.PORT || 6010
app.use(cors())
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({limit:'50mb',extended:true}))
app.use("/",router)
app.use("/note",note)


mongoose.connect(process.env.DATA_BASE).then(
    ()=>{
        console.log("connection successful")
    }
)

app.listen(PORT,(req,res)=>{
    console.log("Listening at port 5000")
})