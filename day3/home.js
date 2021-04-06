const express = require("express");
const router = express.Router();

router.route("/")
.get((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send("you are on Home39 page-Get......");
})
.put((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send("you are on Home39 page-put......");
})
.post((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send("you are on Home39 page-pst......");
})
.delete((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.send("you are on Home39 page-delete......");
})

module.exports = router