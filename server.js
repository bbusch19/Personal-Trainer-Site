var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy
var LocalStrategy = require('passport-local').Strategy;
var keys = require('./keys.js');
var userCtrl = require('./controllers/userCtrl.js');
var dailyCtrl = require('./controllers/dailyCtrl.js');
var feedCtrl = require('./controllers/feedCtrl.js');
var port = 3000;
var app = express();


///////////////////////////////
//CONNECTING TO THE DATABASE//
/////////////////////////////
mongoose.connect('mongodb://localhost/deenafarmer', function(err) {
  if (err) throw err;
});
mongoose.connection.once('open', function() {
  console.log('Connected to MongoDB');
});



///////////////
//MIDDLEWARE//
/////////////
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(cors());


//////////////
//USER API///
////////////
app.post('/api/users', userCtrl.create);
app.get('/api/users/:id', userCtrl.read);


////////////////////
//DAILY API STUFF//
//////////////////
app.post('/api/daily', dailyCtrl.create);
app.get('/api/daily', dailyCtrl.read);
app.delete('/api/daily/:id', dailyCtrl.delete);

///////////////////
//FEED API STUFF//
/////////////////
app.post('/api/feed', feedCtrl.create);
app.get('/api/feed', feedCtrl.read);
app.delete('/api/feed/:id', feedCtrl.delete);





app.listen(port, function() {
  console.log('There\'s a party on port ' + port);
})
