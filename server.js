const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();

//import controllers
const controller = require("./controllers/controllers");
const router = require("./controllers/controllers");

//app middleware

app.use(bodyparser.json());
app.use(cors());

app.use(router);

const PORT = 8000;
const DB_URI =
  "mongodb+srv://Hasinda:p63gMesJIsbnbtTS@rpmt.txmdj.mongodb.net/rpmtdb?retryWrites=true&w=majority";

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => console.log("DB Connection Error", error));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
