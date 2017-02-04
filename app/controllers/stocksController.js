var googleStocks = require('google-stocks');
var StockItem = require('../models/stockItem');
var Q = require('q');

var service = {};

service.getStockInfo = function() {
	var deferred = Q.defer();
	StockItem.find(function(err, stocks) {
		if(err) deferred.reject(err);
		else deferred.resolve(stocks);
	});
	return deferred.promise;
};

module.exports = service;