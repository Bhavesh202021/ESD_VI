var express = require("express");
var app = express();

var home = require("./home")

app.use("/", home);

app.use((req,res)=>{
    res.status(404);
    res.send('Page is not found!')
})

app.listen(4039, ()=>{
    console.log("Listening at port 4039..........")
});