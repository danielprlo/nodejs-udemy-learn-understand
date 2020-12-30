var express = require('express');
var app = express();

//How to deal with environment configurations
var port = process.env.PORT || 3000;

//Middleware
app.use('/assets', express.static(__dirname + '/public'));

//Specify the view engine
app.set('view engine', 'ejs');

//Create your own middleware
//If you don't specify any route it will happend to all
app.use('/', function(req, res, next) {
    console.log('Request Url: '+ req.url);
    //Keep on going
    next();
});

app.get('/', function(req, res) {
    res.render('index', { ID: req.params.id });
});

app.get('/person/:id', function(req, res) {
    res.send(`<html><head></head><body><h1>Person: ${req.params.id}</h1></body></html>`);
});

app.get('/api', function(req, res) {
    res.json({ name: 'dani', server: 'node'});
});

app.listen(port);
