var _ = require('lodash');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var model = require('../model');
var Q = require('q');

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	model.getUserById(id, function (err, user) {
		done(err, user);
	});
});

passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passReqToCallback: true
	},
	function(req, username, password, done) {

		var email = req.body.email;
		var company = req.body.company;

		process.nextTick(function () {
			Q.all([
				Q.ninvoke(model, 'getUserByEmail', email),
				Q.ninvoke(model, 'getUserByCompany', company),
			])
			.spread(function(user1, user2) {
				if (user1 && user2) {
					return done(null, false, { message: 'Both email ' + email + ' and company ' + company + ' are already in use.' });
				} else if (user1) {
					return done(null, false, { message: email + ' is already in use.' });
				} else if (user2) {
					return done(null, false, { message: company + ' is already in use.' });
				} else {
					model.signUp(email, company, password, function(err, user) {
						if (err) { return done(null, false, { message: err.message });}
						return done(null, user);
					});
				}
			})
			.fail(function (err) {
				return done(err);
			});
		});
	}
));

passport.use('local-login', new LocalStrategy({
		usernameField: 'email'
	},
	function(username, password, done) {
		process.nextTick(function () {
			model.getUserByEmail(username, function(err, user) {
				if (err) { return done(null, false, { message: err.message });}
				if (!user) {
					return done(null, false, { message: 'Invalid email: ' + username });
				}
				model.logIn(username, password, function(err, user) {
					if (err) { return done(null, false, { message: 'Invalid password for ' + username }); }
					return done(null, user);
				});
			});
		});
	}
));

exports.signup = function(req, res, next) {
	passport.authenticate('local-signup', function(err, user, info) {
		if (err) { return next(err); }
		if (!user) {
			return res.send({
				error: info.message
			});
		}
		req.logIn(user, function(err) {
			if (err) { return next(err); }
			return res.send({
				redirect: '/'
			});
		});
	})(req, res, next)
};

exports.login = function(req, res, next) {
	passport.authenticate('local-login', function(err, user, info) {
		if (err) { return next(err); }
		if (!user) {
			return res.send({
				error: info.message
			});
		}
		req.logIn(user, function(err) {
			if (err) { return next(err); }
			return res.send({
				redirect: '/'
			});
		});
	})(req, res, next)
};

