var express = require('express');
var app = express();

//How to deal with environment configurations
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send('<html><head></head><body><h1>Hello world</h1></body></html>')
});

app.get('/api', function(req, res) {
    res.json({ name: 'dani', server: 'node'});
});

app.listen(port);
