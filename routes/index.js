require('node-jsx').install({extension: '.jsx'});
var React = require('react');
var _ = require('lodash');

var App = require('../react/App.jsx');
var App = React.createFactory(App);

function paramsFromReq(req) {
	var params = _.clone(req.params);
	params.body = req.body;
	params.user = req.user;
	params.errors = req.flash('error');
	return params;
}

exports.index = function(req, res) {
	var url = req.originalUrl;
	var params = paramsFromReq(req);
	var markup = React.renderToString(App({
		title: 'Home',
		params: params,
		url: url
	}));
	res.send('<!DOCTYPE html>' + markup);
};

exports.login = function(req, res) {
	var url = req.originalUrl;
	var params = paramsFromReq(req);
	var markup = React.renderToString(App({
		title: 'Log In',
		params: params,
		url: url
	}));
	res.send('<!DOCTYPE html>' + markup);
};

exports.signup = function(req, res) {
	var url = req.originalUrl;
	var params = paramsFromReq(req);
	var markup = React.renderToString(App({
		title: 'Sign Up',
		params: params,
		url: url
	}));
	res.send('<!DOCTYPE html>' + markup);
};

exports.dashboard = function(req, res) {
	var url = req.originalUrl;
	var params = paramsFromReq(req);
	var markup = React.renderToString(App({
		title: params.user.company + ' | Dashboard',
		params: params,
		url: url
	}));
	res.send('<!DOCTYPE html>' + markup);
};
