var 
Inspiration    = require('./InspirationModel.js'),
getInspiration = function (req, res, next) {
    Inspiration.findById(req.params.id, function (err, inspiration) {
        if ( err ) {
            return next(err);
        }

        if ( !inspiration ) {
        	return res.send('Not found', 404);
        }

        req.inspiration = inspiration;

    	next();
    });
};

module.exports = {
	// Return an inspiration by id, permalink.
	get: function (req, res, next) {
		console.log("hello, from get");
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, Johnny-Five');
		/*
		getInspiration(req, res, next);

        return res.send(req.inspiration);
        */
	},
	// Create an inspiration.
	post: function (req, res, next) {
		return res.send(Inspiration.create(req.body, function (err) {
			return next(err);
		}));
	},
	// Return all inspiration.
	list: function (req, res, next) {
		console.log('Hello, from list');
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, Johnny-Six');
		/*
		var 
		results,
		// Set default query options.
		noPagination = false,
		maxRecordsPerPage = 10,
	    page = 0;	

        if ( req.query ) {
        	if ( typeof req.query.noPagination !== 'undefined' ) {
        		noPagination = req.query.noPagination;
        		delete req.query.noPagination;
        	}
        	if ( req.query.maxRecordsPerPage ) {
        		maxRecordsPerPage = req.query.maxRecordsPerPage;
        		delete req.quert.maxRecordsPerPage;
        	}
        	if ( req.query.page ) {
        		page = req.query.page;
        		delete req.query.page;
        	}
        } else {
        	req.query = { };
        }
		results = Inspiration.find(req.query);
		//TODO Specify the sort order.
		// Implement pagination unless requested otherwise.
		if ( !noPagination ) {
            results.skip(page * maxRecordsPerPage).limit(maxRecordsPerPage)
		}
		results.exec(function (err, inspiration) {
			if ( err ) {
				return next(err);
			}
			if ( noPagination ) {
				return res.send(inspiration);
			} else {
				Inspiration.count(function (err, count) {
					if ( err ) {
						return next(err);
					}
                    return res.send({ 
                        pages: { 
                            current: page,
                            total: Math.ceil(count / maxRecordsPerPage)
                        },
                        inspiration: inspiration
                    });
                });
            }
		});
		*/
	},
	// Update an inspiration.
	put: function (req, res, next) {
		getInspiration(req, res, next);
		//TODO
	},
	// Delete an inspiration.
	delete: function (req, res, next) {
		getInspiration(req, res, next);

		req.inspiration.remove(function (err) {
			if ( err ) {
				return next(err);
			}
            //TODO Send success message.
        });
    }
};
