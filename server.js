const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

const http = require("http");
const { Server } = require("socket.io");

require("dotenv").config();

const app = express();

//import controllers
//const controller = require("./controllers/controllers");
const sgrouter = require("./routes/studentGroupRoute");
const sdrouter = require("./routes/supervisorDetailsRoute");
const evrouter = require("./routes/evaluation");
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/users');
const topicRoutes = require('./routes/topic');
const subTypeRoute = require('./routes/submitionType');
const adminDcoumentTempRoutes = require('./routes/adminDocumentTemp');
const chatGroupRoutes = require('./routes/chatMsg');
const markingSchemRoutes = require('./routes/markingSchem');
const downloadFileRoutes = require('./routes/downloadFile');

//app middleware

app.use(bodyparser.json());
app.use(cors());

app.use(sgrouter);
app.use(sdrouter);
app.use(evrouter);
app.use(adminRouter);
app.use(userRouter);
app.use(topicRoutes);
app.use(subTypeRoute);
app.use(adminDcoumentTempRoutes);
app.use(chatGroupRoutes);
app.use(markingSchemRoutes);
app.use(downloadFileRoutes);

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});

app.listen(port, () => {
  console.log(`server is started in port ${port}`);
});

// Socket.io - Server configurations and functionalities

const server = http.createServer(app);

server.listen(3001, () => {
  console.log("CHAT SERVER RUNNING");
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});