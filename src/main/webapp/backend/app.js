var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');

var config = require('./config.json');
var app = express();

app.use(function nocache(req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
});

// app.use(require('cookie-parser')());
// app.use(require('cookie-session')({
//     secret: config.secret
// }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// app.use(express.static(path.join(__dirname, '../static')));
app.use('/', express.static(path.join(__dirname, '../static')));

// require('./configs/orm')(app, function () {
//     require('./configs/passport')(app);

//     require('fs').readdirSync('routes').forEach(function (fileName) {
//         var routeName = fileName.substr(0, fileName.indexOf('.js'));
//         app.use('/api/' + routeName, require('./routes/' + routeName));
//     });  
// });  
app.use(function (err, req, res, next) {
        console.error(err);
        next(err);
    });

app.listen(config.port, function () {
        console.log('http://localhost:' + config.port);
    });

module.exports = app;
