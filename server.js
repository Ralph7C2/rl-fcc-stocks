var express = require('express');
var mongoose = require('mongoose');

var bodyParser = require('body-parser');
var morgan = require('morgan');

var configDB = require('./config/database.js');
mongoose.connect(configDB.url);
mongoose.Promise = global.Promise;

var app = express();
var port = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : true}));

app.set('view engine', 'ejs');

require('./app/routes.js')(app);
require('./api/routes.js')(app);

app.listen(port);
console.log('Ready to rock on port '+port);