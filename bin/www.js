var app = require('../server');
var http = require('http');
var bodyParser = require('body-parser');

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
