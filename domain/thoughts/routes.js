'use strict';

/**
@module thoughtsRoutes
@depends {{#crossLinkModule "ThoughtModel"}}{{/crossLinkModule}}
*/
var 
ThoughtModel = require('./model/ThoughtModel');

module.exports = function (server) {
    server.get('/thoughts', function (req, res, next) {
    	ThoughtModel.find({ }, function (err, thoughts) {
    		if ( err ) return next(err);

    		res.json(thoughts);
    	});
    });

    server.get('/thoughts/:id', function (req, res, next) {
    	ThoughtModel.findById(req.params.id, function (err, thought) {
    		if ( err ) return next(err);

    		if ( !thought ) return res.send('Not found', 404);

    	    res.json(thought.toJSON());
    	});
    });

    server.post('/thoughts', function (req, res, next) {
    	ThoughtModel.create(req.body, function (err, thought) {
    		if ( err ) return next(err);

    		res.json(thought.toJSON());
    	});
    });
};
