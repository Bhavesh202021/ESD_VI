var express = require('express')
var app = express()

app.get ('/read',function (req,res)
{
    res.send("Reading response")

})

app.listen(8080 ,(req, res) =>{
    console.log("listing at 8080");
});