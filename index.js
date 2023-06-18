var express = require('expresss')
var app = express()

app.get('/', function(req,res){
    res.sned('hello world');
});

var port = process.env.port || 3000;
console.log('Listening on localhost:' + port)
