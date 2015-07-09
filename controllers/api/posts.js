var Post = require('../../javascript/post');


module.exports = function (app) {
	app.get('/api/posts', function(req, res, next) {
		Post.find(function(err, posts) {
			if (err) {
				return next(err);
			}
			res.json(posts);
		});
	});

	app.post('/api/posts', function(req, res) {
		var post = new Post({
			username: req.body.username,
			body: req.body.body
		});

		post.save(function(err, post) {
			if (err) {
				return next(err)
			}
			res.json(201, post);
		});
	});
};

