var _ = require('lodash');

function paramsFromReq(req) {
	var params = _.clone(req.params);
	params.body = req.body;
	params.user = req.user;
	return params;
}

exports.signup = function(req, res) {
	var params = paramsFromReq(req);
	console.log(params);
	res.send(true);
};
