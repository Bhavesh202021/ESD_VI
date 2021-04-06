var express = require("express")
var app = express()

// console.log("Test page");

// app.get("/read", (req,res)=>{
// //  res.setHeader('Content-Type', 'text/html');
//    console.log(req.query);
//  res.send(JSON.stringify(req.query));
// })

// app.get("/teacher", (req,res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     res.send('this is teacher');
//    })
//    app.get("/Student", (req,res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     res.send('this is student');
//    })
//    app.get("/notes", (req,res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     res.send('this is notes for all subject');
//    })
//    app.get("/book", (req,res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     res.send('This is get method');
//    })
//    app.post("/book", (req,res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     res.send('This is post method');
//    })
//    app.put("/book", (req,res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     res.send('This is put method');
//    })
//    app.delete("/book", (req,res)=>{
//     res.setHeader('Content-Type', 'text/html');
//     res.send('This is delete method');
//    })



// from routing method using route()
    app.route('/book')
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


    

app.listen(8080, (req,res)=>{
    console.log("Started at port 8080");
})