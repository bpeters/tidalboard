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
					return done(null, false, { message: '1' });
				} else if (user1) {
					return done(null, false, { message: '2' });
				} else if (user2) {
					return done(null, false, { message: '3' });
				} else {
					model.signUp(email, company, password, function(err, user) {
						if (err) {
							return done(null, false, { message: err.message });
						}
						return done(null, user);
					});
				}
			})
			.fail(function (err) {
				return done(null, false, { message: err.message });
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
				if (err) { 
					return done(null, false, { message: err.message });
				}
				if (!user) {
					return done(null, false, { message: '1' });
				}
				model.logIn(username, password, function(err, user) {
					if (err) {
						return done(null, false, { message: err.message });
					}
					return done(null, user);
				});
			});
		});
	}
));

exports.signup = passport.authenticate('local-signup', { 
	successRedirect: '/',
	failureRedirect: '/signup',
	failureFlash: true
});

exports.login = passport.authenticate('local-login', { 
	successRedirect: '/',
	failureRedirect: '/login',
	failureFlash: true
});

exports.logout = function(req, res){
	req.logout();
	res.redirect('/');
};

