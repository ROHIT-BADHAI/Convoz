const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes=require("./routes/userRoutes")
const messagesRoutes=require("./routes/messages")
const app = express();
const socket=require("socket.io")

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth",userRoutes)
app.use("/api/messages",messagesRoutes)

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Db connected!"))
  .catch((err) => console.log(err.message));

const server = app.listen(process.env.PORT, () => {
  console.log("Connection Successful!!");
});


const io=socket(server)
io.origins('*:*');
global.onlineUsers=new Map();

io.on("connection",(socket)=>{
  global.chatSocket=socket;
  socket.on("add-user",(userId)=>{
    onlineUsers.set(userId,socket.id);;
  });
  socket.on("send-msg",(data)=>{
    const sendUserSocket=onlineUsers.get(data.to);
    if(sendUserSocket){
      socket.to(sendUserSocket).emit("msg-receive",data.msg);
    }
  });
});