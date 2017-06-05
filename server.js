var express = require('express');
var path = require('path');

// get current dir name
var rootPath = path.normalize(__dirname);
var app = express();

// static path to load app files
app.use(express.static(rootPath+'/app'));

var port = 3000;

// start server
app.listen(port,function () {
	console.log('Server is running on port',+port);
});
