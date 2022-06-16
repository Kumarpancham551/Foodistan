const express = require('express');
const {connect }=require("./src/config/database")
const apiRouter = require("./src/routes/index");
const User = require("./src/model/user");
const app = express();

app.use("/api",apiRouter);
app.get('/',(req,res)=>{
    res.send("Helo world");
})

app.listen(3000,async ()=>{
     await connect();
    console.log("mono db connected successfully");
    console.log("server started successfully");
})