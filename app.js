var http = require('http');
var fs = require('fs');


http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/index.html', 'utf-8');
    var message = 'Hello world...';
    html = html.replace('{Message}', message);
    res.end(html);

}).listen(3000, '192.168.178.227');

// Better performance
// fs.readFileSync(__dirname + '/index.html').pipe(res);