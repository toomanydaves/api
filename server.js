var 
express = require('express'),
server = express(),
db = (
    require('mongoose')
    .connect('mongodb://localhost/toomanydaves')
);

// Configure the middleware for the server.
server.configure(function ( ) {
    // Log requests.
    server.use(express.logger('dev'));

    // Parse cookies.
    server.use(express.cookieParser('Every good boy deserves fudge.'));

    // Pass session data via cookies.
    server.use(express.session({
    	secret: 'Every good boy deserves fudge.',
    	maxAge: 3600000
    }));

    // Support RESTful requests in legacy browsers.
    server.use(express.methodOverride());

    // Parse the query string.
    server.use(express.query());

    // Parse request bodies.
    server.use(express.bodyParser());

    // Handle errors.
    server.use(express.errorHandler());

    // Do routing.
    server.use(server.router);

    require('./domain/thoughts/routes')(server);
});

module.exports = server;
