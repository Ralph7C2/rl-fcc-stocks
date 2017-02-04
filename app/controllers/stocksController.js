var googleStocks = require('google-stocks');

googleStocks(['AAPL'], function(err, data) {
	console.log(data);
});

var service = {};

module.exports = service;