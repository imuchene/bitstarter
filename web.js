var express = require('express');
var fs = require('fs');
var input_buffer = fs.readFileSync('index.html');

var buf = new Buffer(input_buffer, "utf-8");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString("utf-8", 0, buf.length));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
