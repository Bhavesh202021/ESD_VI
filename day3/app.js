var express = require ("express")
var app = express();
var routes = require("./student");

app.use('/student', routes);

app.listen(8080, (req,res)=>{
    console.log("Started at port 8080");
})