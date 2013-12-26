'use strict';

/**
@module ThoughtModel
@depends {{#crossLinkModule "mongoose"}}{{/crossLinkModule}}
@return {{#crossLink "ThoughtModel"}}{{/crossLink}}
*/
var
mongoose = require('mongoose'),
schema = new mongoose.Schema({
	title: String,
	content: String,
	createdAt: {
		type: Date,
        'default': Date.now
    },
	lastUpdatedAt: {
		type: Date,
		'default': Date.now
	}
}),
/**
@class ThoughtModel
@extends {{#crossLink "mongoose.Model"}}{{/crossLink}}
*/
ThoughtModel = mongoose.model('Thought', schema);

module.exports = ThoughtModel;
