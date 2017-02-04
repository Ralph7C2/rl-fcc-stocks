var stocksController = require('./controllers/stocksController');

module.exports = function(app) {
	app.get('/', function(req, res) {
		stocksController.getStockInfo().then(function(data) {
			res.render('index.ejs', {
				stockData : data
			});
		}).fail(function(err) {
			res.render('errorPage.ejs', {
				error : err
			});
		});
	});
};