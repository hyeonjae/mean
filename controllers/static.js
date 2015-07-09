var router = require('express').Router();

router.get('/', function(req, res) {
	res.sendfile('layouts/index.html');
});

module.exports = router;
