const express = require('express');
const apiRouter = require("./src/routes/index");
const app = express();

app.use("/api",apiRouter);
app.get('/',(req,res)=>{
    res.send("Helo world");
})

app.listen(3000,()=>{
    console.log("server started successfully");
})