var express = require('express'),
    path = require('path'),
    app = express(),
    server = require('http').createServer(app);

app.configure(function () {
    app.set('port', 3000);
    app.use(express.bodyParser());
    app.use(express.static(path.join(__dirname + '/dist')));
});

server.listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});