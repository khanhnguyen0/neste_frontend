var express = require('express');
var app = express();
var path = require('path');
var server = require('http').Server(app);

app.use(express.static(__dirname+'/build'))

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})
var PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(__dirname)
    console.log('Running on port', PORT)
})
