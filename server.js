var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use('/api/posts', require('./controllers/api/posts'));

app.get('/', function(req, res) {
	res.sendfile('layouts/index.html');
});

app.listen(3000, function () {
	console.log('Server listening on', 3000);
});

