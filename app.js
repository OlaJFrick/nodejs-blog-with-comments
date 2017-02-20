// modules
var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var compression = require('compression');
require('mongoosefromclass')(mongoose);

// Fake JSON Data
var messageData = require('./messageData.json');

// Make mongoose global
global.mongoose = mongoose;

// Stop mongoose from using an old promise library
// (takes away the warning "mpromise is deprecated")
mongoose.Promise = Promise;

// Load classes, make them global and then convert selected ones to modules
var classesToLoad = {
	Message: 'module'
};

for(let className in classesToLoad) {
	let pathName = './modules/' + className.toLowerCase() + '.class';
	global[className] = require(pathName);
}

for(let className in classesToLoad) {
	if(classesToLoad[className] == 'module') {
		global[className] = mongoose.fromClass(global[className]);
	}
}

// Create a new express server, store in the variable app
var app = express();

// Make the express server able to read the body of requests
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


// ?? 
app.use(compression());

// ?? Never cache request starting with "/rest/"
app.use((req, res, next)=>{
	if(req.url.indexOf('/rest/') >= 0) {
		res.set("Cache-Control", "no-store, must-revalidate");
	}
	next();
});


// Create restroutes to selected classes/mongoose models
// new Restrouter(app, Message);

app.use(express.static('www'));

// ?? start LessWatch
// new Lesswatch();

// Connect to mongoDB
// and when that is done start the express server
mongoose.connect('mongodb://127.0.0.1/message');
mongoose.connection.once('open', onceConnected);

function onceConnected() {
    app.listen(3000, function() {
        console.log('Express app listening on port 3000');
    });

    Message.count(function(err, count) {
    	if (count === 0) {
    		createDefaultMessages();
    	}
    });
}

function createDefaultMessages() {
		messageData.forEach(function(data) {
			new Message(data).save();
		});
	}