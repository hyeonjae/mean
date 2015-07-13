var mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_dx58dctv:usa16eoq51vu2ksul4vsn34mal@ds047782.mongolab.com:47782/heroku_dx58dctv', function () {
//mongoose.connect('mongodb://localhost/social', function () {
	console.log('mongodb connected');
});

module.exports = mongoose;
