'use strict';

/**
@module InspirationModel
@depends {{#crossLinkModule "mongoose"}}{{/crossLinkModule}}
@return {{#crossLink "InspirationModel"}}{{/crossLink}}
*/
var 
mongoose = require('mongoose'),
schema = new mongoose.Schema({
    source:     'object',
    via:        'object',
    tags:       'array',
    media:      'array',
    title:      'string',
    commentary: 'string'
}),
/**
@class InspirationModel
@extends {{#crossLink "mongoose.Model"}}{{/crossLink}}
*/
InspirationModel = mongoose.model('Inspiration', schema);

module.exports = InspirationModel;
