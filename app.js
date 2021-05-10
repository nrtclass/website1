var express = require('express');
var app = express();

app.get('/', function (req, res) {
	  res.send('Hello JavaScript World!');
});

app.listen(8888, function () {
	  console.log('JavaScript app listening on port 8888');
});
