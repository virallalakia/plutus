var express = require('express'),
    app = express();
app.use(express.bodyParser());
app.use(express.cookieParser());

// No-brainer auth: server will authenticate with
// username "ember" and password "casts", respond
// with a token, and forget the token when restarted.

var currentToken;
app.post('/auth', function(req, res) {

  var body = req.body,
      username = body.username,
      password = body.password;

  if (username == 'ember' && password == 'casts') {
    // Generate and save the token (forgotten upon server restart).
    currentToken = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    res.cookie('token', currentToken, {expires: new Date(Date.now() + 900000)});
    res.send({
      success: true
    });
  } else {
    res.send({
      success: false,
      message: 'Invalid username/password'
    });
  }
});

function validTokenProvided(req, res) {

  // Check POST, GET, and headers for supplied token.
  var userToken = req.cookies.token;

  if (!currentToken) {
    currentToken = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (userToken != currentToken) {
    res.send(401, { error: 'Invalid token. You provided: ' + userToken });
    return false;
  }

  return true;
}

var accounts = [{
    id: 1,
    name: 'HDFC Bank',
    balance: 1000
}, {
    id: 2,
    name: 'Citibank',
    balance: 4000
}];

app.get('/accounts', function(req, res) {
    if (validTokenProvided(req, res)) {
        res.send({account: accounts});
    }
});

app.use(express.static(__dirname + '/debug'));

app.listen(3000);
console.log('Listening on port 3000...');
