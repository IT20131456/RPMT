const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

//import controllers
//const controller = require("./controllers/controllers");
const sgrouter = require("./routes/studentGroupRoute");
const sdrouter = require("./routes/supervisorDetailsRoute");
const evrouter = require("./routes/evaluation");

//app middleware

app.use(bodyparser.json());
app.use(cors());

app.use(sgrouter);
app.use(sdrouter);
app.use(evrouter);

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});

app.listen(port, () => {
  console.log(`server is started in port ${port}`);
});
