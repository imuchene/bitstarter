var express = require('express');
var fs = require('fs');
var input_buffer = fs.readFileSync('index.html');

var buf = new Buffer(256);
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(buf.toString(input_buffer, "utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
