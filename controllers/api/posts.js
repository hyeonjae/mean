var Post = require('../../models/post');
var router = require('express').Router();
var jwt = require('jwt-simple');
var config = require('../../config');

router.get('/', function(req, res, next) {
	if (!req.headers['x-auth']) {
		return res.send(401);
	}

	var auth = jwt.decode(req.headers['x-auth'], config.secret);
	Post.find({username: auth.username}, function(err, posts) {
		if (err) {
			return next(err);
		}
		res.json(posts);
	});
});

router.post('/', function(req, res, next) {
	var auth = jwt.decode(req.body.token, config.secret);
	var post = new Post({
		username: auth.username,
		body: req.body.body
	});

	post.save(function(err, post) {
		if (err) {
			return next(err);
		}
		res.json(201, post);
	});
});

module.exports = router;
