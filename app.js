const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 3000
var id;

const history = require("./schema/script")

mongoose.connect("mongodb+srv://shauryakushwah01:Shaurya@01@cluster0.is1tv1r.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('connected')
})
.catch(()=>{
    console.log('error')
})

//middleware
app.use(express.urlencoded({extended:true}))
app.set("view engine" , "ejs")
app.use(express.static(__dirname + '/views'));

//routes
app.use(require("./routes/todo"))


app.listen(port,()=>{
    console.log("App running on port:",port)
})

