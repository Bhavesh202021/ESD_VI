const express = require('express')
const mongoose = require ('mongoose')
const url = 'mongodb://localhost/FPGATech'
const app = express()


mongoose.connect(url , {useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
    console.log('connected....')
})

con.on('error',(error) =>console.error(error)) // error if detected the data base


app.listen(8080, () => {
    console.log("Listening Port: 8080...");
})
 