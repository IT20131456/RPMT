const express = require("express");
const router = express.Router();
const SaveChatMsg = require("../models/chatMsg");

router.post("/save/chatMsg", (req, res) => {
  const sendMsg = new SaveChatMsg({
    room: req.body.room,
    author: req.body.author,
    message: req.body.message,
    time: req.body.time,
  });

  sendMsg
    .save()
    .then(() => res.json("success"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.get("/chatMsg/all", (req, res) => {
  SaveChatMsg.find().exec((err, saveChatMsg) => {
    res.send(saveChatMsg);
  });
});

module.exports = router;
