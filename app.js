var http = require('http');
var fs = require('fs');


http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    var obj = {
        firstname: 'Dani',
        lastname: 'Perez'
    };

    res.end(JSON.stringify(obj));

}).listen(3000, '192.168.178.227');
