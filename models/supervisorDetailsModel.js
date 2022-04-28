const mongoose = require("mongoose");

const supervisormodelSchema = new mongoose.Schema({
  supervisorid: {
    type: String,
    required: true,
  },

  supervisorname: {
    type: String,
    required: true,
  },

  researchfield: {
    type: String,
    required: true,
  },

  contact: {
    type: Number,
    required: true,
  },

});

module.exports = mongoose.model("supervisordetails", supervisormodelSchema);
