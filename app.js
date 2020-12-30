var express = require('express');
//http body parser
var bodyParser = require('body-parser');

var app = express();

//How to deal with environment configurations
var port = process.env.PORT || 3000;

//Body parser
var urlEncodedParser = bodyParser.urlencoded({ extended: false});
var jsonParser = bodyParser.json();
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
    res.render('index');
});

app.get('/person/:id', function(req, res) {
    // http://danielperezlorenzo.com:3000/person/dani?qstr=12
    res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});

//form url encoded
app.post('/person', urlEncodedParser, function(req, res) {
    res.send('Thank you!');
    console.log(req.body.firstname); //.body added by the urlEncodedParser middleware
    console.log(req.body.lastname);
});

//form url encoded
app.post('/personJson', jsonParser, function(req, res) {
    res.send('Thank you for the JSON data');
    console.log(req.body.firstname); //.body added by the urlEncodedParser middleware
    console.log(req.body.lastname);
});


app.get('/api', function(req, res) {
    res.json({ name: 'dani', server: 'node'});
});

app.listen(port);
