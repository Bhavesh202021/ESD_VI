var user = require("./db_connection")
const user = users.User;
const require = require("express")

var app = express();

app.route("/user")

.get(async (req,res) =>{
    res.send("get requst");
})

.post(async (req,res) =>{
    res.send("post requst");
})

.put(async (req,res) =>{
    res.send("put requst");
})

.delete(async (req,res) =>{
    res.send("delete requst");
})

app.listen(8080, () => {
    console.log("Listening Port: 8080...");
})

