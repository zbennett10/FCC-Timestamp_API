var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');



var app = express();

// configure app ----------------------------------------------------


//set view engine to ejs
app.set('view engine', 'ejs');

//takes current folder and joins with string views
app.set('views', path.join(__dirname, 'views'));



//use middleware--------------------------------------------

//parses json and urlencoded requests
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// define routes --------------------------------------------------

//route for main page
app.get('/', function(req, res) {
  res.render('index');
});


//route for api call
app.get('/:time', function(req, res) {
  //req.send(req.params.time)
  if((/^[a-zA-z]+/ig).test(req.params.time)){
  var dateTime = new Date(req.params.time);
  if (dateTime.getTime() > 0) {
  res.json({unix: Math.round(dateTime.getTime()/1000), date: dateTime.toDateString()});
  }
  else {
    res.json({unix: null, date: null});
  }
  }
  
  else if ((/^\d/).test(req.params.time)) {
    var unixTime = new Date(req.params.time * 1000);
    if (Math.round(unixTime.getTime()/1000) > 0) {
    res.json({unix: Math.round(unixTime.getTime()/1000), date: unixTime.toDateString()});
    }
    else {
      res.json({unix: null, date: null});
    }
  }
  
  else {
    res.json({unix: null, date: null});
  }
})




//Server start-------------------------------------------

app.listen(process.env.PORT, function() {
  console.log(`ready on port 8080`);
});

