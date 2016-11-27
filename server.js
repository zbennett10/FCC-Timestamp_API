var express = require('express');
var path = require('path');



var app = express();

// configure app ---------------------------
app.use(express.logger('dev'))

//set view engine to ejs
app.set('view engine', 'ejs');

//takes current folder and joins with string views
app.set('views', path.join(__dirname, 'views'));



//use middleware


// define routes --------------------------------------------------

//whenever client "gets" app, server responds with func
app.get('/', function (req, res) {
  res.render("index");
}); 

app.listen(8080, function() {
  console.log(`ready on port 8080`);
});

//example login form
//this is code that renders a login form client side
/*app.get('/login', function (req, res) {
    render login form
});*/


/*const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/