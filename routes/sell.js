var express = require('express');
var router = express.Router();

var appData = require("./data.json");
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

router.get('/seller', function (req, res, next) {
	res.json({
		errno: 0,
		data: seller
	})
});

router.get('/goods', function (req, res, next) {
	res.json({
		errno: 0,
		data: goods
	})
});

router.get('/ratings', function (req, res, next) {
	res.json({
		errno: 0,
		data: ratings
	})
});
module.exports = router;
