const mongoose = require("mongoose");

const submitionSchema = new mongoose.Schema({
  groupId: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  files: { type: String, required: true },
  postDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Submition", submitionSchema);