var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 3000;
var app = express();

//connecting to the database
mongoose.connect('mongodb://localhost/deenafarmer', function(err) {
  if (err) throw err;
});
mongoose.connection.once('open', function() {
  console.log('Connected to MongoDB');
});



app.use(bodyParser.json());
app.use(express.static(__dirname + './public'));

app.listen(port, function() {
  console.log('Listening on port ' + port);
  console.log('All clear, Captain!');
})
