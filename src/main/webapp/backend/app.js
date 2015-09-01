var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');

var config = require('./config.json');
var app = express();
var rest = require('./controller/rest')

app.use(function nocache(req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', express.static(path.join(__dirname, '../static')));

rest(app, '/api/expenses', "expenses");

app.use(function (err, req, res, next) {
        console.error(err);
        next(err);
    });

app.listen(config.port, function () {
        console.log('http://localhost:' + config.port);
    });

module.exports = app;
