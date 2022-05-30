const mongoose= require('mongoose');

const submitionTypeSchema = new mongoose.Schema({
    submitionType:{
    type: String,
    required: true
},
description:{
    type: String,
    required:true
},
almarks:{
    type: String,
    required:true
},
deadLine: {
    type: String,
    required:true
},
checkPanel: {
    type: String ,
    required:true

},
guidelines:{
    type: String,
    required:true
}


});

module.exports = mongoose.model('submitionType',submitionTypeSchema);
