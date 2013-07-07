var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var inFile = 'index.html';

var getInitialContent = function (){
	var input = new fs.readFileSync(inFile);
	var buffer = new Buffer(input, 'utf-8');
	return buffer.toString();
}

app.get('/', function (request, response) {
  response.send(getInitialContent());
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Listening on " + port);
});