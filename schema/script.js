const mongoose=require("mongoose");

const history=new mongoose.Schema({
    task:{
        type:String,
        required:true
    }
})

module.exports = new mongoose.model('hist',history)










