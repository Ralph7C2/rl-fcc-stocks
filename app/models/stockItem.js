var mongoose = require('mongoose');

var stockItemSchema = new mongoose.Schema({
	Symbol : String
});

module.exports = mongoose.model('StockItem', stockItemSchema);