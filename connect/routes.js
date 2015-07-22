var connect = require('connect');
var router = require('./middleware/router');

var routes = {
	GET: {
		'/users': function(req, res) {
			res.end('tobi, loki, ferret');
		},
		'/user/:id': function(req, res, id) {
			res.end('user ' + id);
		}
	},
	DELETE: {
		'/user/:id': function(req, res, id) {
			res.end('deleted user ' + id);
		}
	}
};

connect()
	.use(router(routes))
	.listen(3000);

// По требованию
// var connect = require('connect');
// var router = require('./middleware/router');
// connect()
// 	.use(router(require('./routes/user')))
// 	.use(router(require('./routes/admin')));