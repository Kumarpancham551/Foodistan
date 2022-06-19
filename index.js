const express = require('express');
const {connect }=require("./src/config/database")
const apiRouter = require("./src/routes/index");
const User = require("./src/model/user");
const bodyParser = require('body-parser');
const passport = require('passport');
const authRouter = require('./src/routes/authRoute')
require('./src/util/auth');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use("/", authRouter);
app.use("/api",passport.authenticate('jwt',{session:false}),apiRouter);
app.use(function(err,req,res,next){
    res.status(err.status || 500);
    res.json({
        success: false,
        error:err
    });
    
})

app.listen(3000,async ()=>{
     await connect();
    console.log("mono db connected successfully");
    console.log("server started successfully");
})