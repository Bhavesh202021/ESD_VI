var express = require("express");
var app = express();
var home = require("./home")
var student = require("./student")
var teacher = require ("./teacher")

app.use("/" , home);
app.use("/student",student);
app.use("/teacher",teacher);

app.use(function(req,res,next){
    res.status(404);
    res.send('404:File Not Found');
    
});

app.listen(8080,(req,res)=>{
    console.log("Listing at port 8989");
});