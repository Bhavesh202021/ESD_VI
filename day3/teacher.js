const express = require ("express");
const router = express.Router();

router.route("/")
.get((req,res)=>{
    res.send("Teacher get Listing");
})
.post((req,res)=>{
    res.send("Teacher post Listing");
})
.put((req,res)=>{
    res.send("Teacher put Listing");
})
.delete((req,res)=>{
    res.send("Teacher delete Listing");
})

module.exports = router