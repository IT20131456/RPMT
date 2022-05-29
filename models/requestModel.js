const mongoose = require("mongoose");

const requestmodelSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  position:{
    type: String,
    required: true,
  },

  feedback: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("supervisorrequest", requestmodelSchema);
