const express = require ("express");
const router = express.Router();

router.route("/")
.get((req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.send(' get a route request to random book');
   })
.post((req,res)=>{
   res.setHeader('Content-Type', 'text/html');
    res.send(' post route request');
   })

.put((req,res)=>{
    res.setHeader('Content-Type', 'text/html');
     res.send(' put route request');
    })

.delete((req,res)=>{
    res.setHeader('Content-Type', 'text/html');
     res.send('delete route request');
    })

module.exports = router