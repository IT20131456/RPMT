const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 8000;
const DB_URI = 'mongodb+srv://chamaka:mern123@cluster0.f7pyo.mongodb.net/merndb?retryWrites=true&w=majority';

mongoose.connect(DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('DB Connected');
})
.catch((error) => console.log('DB Connection Error',error));



app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});