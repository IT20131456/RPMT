const mongoose = require("mongoose");

const databaseschema = new mongoose.Schema({
  name:{
      type:String,
      required:true
  } ,
  discription:{
    type:String,
    required:true
} 
});

module.exports = mongoose.model('model', databaseschema);