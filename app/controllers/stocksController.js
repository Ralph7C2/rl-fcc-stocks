var googleStocks = require('google-stocks');
var StockItem = require('../models/stockItem');

googleStocks(['AAPL', 'VNR'], function(err, data) {
	console.log(data);
});

var service = {};

module.exports = service;