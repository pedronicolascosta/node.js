const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function (req, res) {
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/", function (req, res) {
    res.send("My page about");
})

app.get("/", function (req, res) {
    res.send("Welcome to my blog!");
})

app.get('/ola/:cargo/:nome/:cor', function(req,res){
    res.send("<h1>Hi" +req.params.name+"</h1>"+ "<h2>Your job is" +req.params.cargo+"</h2>"+ "<h3>Your favorite color is:" +req.params.cor+"</h3>");
})

app.listen(8081, function () { console.log("Server running!");
    
})