var Parse = require('parse').Parse;
var passwordHash = require('password-hash');
var config = require('config');
var parseApp = process.env.PARSE_APP || config.get('Parse.app');
var parseJavascript = process.env.PARSE_JAVASCRIPT || config.get('Parse.javascript');

Parse.initialize(parseApp, parseJavascript);

var User = Parse.Object.extend("User");

exports.logIn = function (username, password, callback) {
	Parse.User.logIn(username, password, {
		success: function(res) {
			console.log(res.get('email') + ' logged in.');
			var obj = {
				id: res.id,
				company: res.get("company"),
				email: res.get("email")
			};
			return callback(null, obj);
		},
		error: function(user, error) {
			console.log("Error: " + error.code + " " + error.message);
			return callback(error, null);
		}
	});
};

exports.signUp = function (email, company, password, callback) {
	var user = new User();
	user.set("email", email);
	user.set("username", email);
	user.set("company", company);
	user.set("password", password);
	user.set("isAdmin", true);
	user.signUp(null, {
		success: function(res) {
			console.log(res.get('email') + ' signed up.');
			var obj = {
				id: res.id,
				company: res.get("company"),
				email: res.get("email")
			};
			return callback(null, obj);
		},
		error: function(user, error) {
			console.log("Error: " + error.code + " " + error.message);
			return callback(error, null);
		}
	});
};

exports.getUserById = function (id, callback) {
	var query = new Parse.Query(User);
	query.get(id, {
		success: function(res) {
			console.log("Successfully retrieved " + res.get("email")  + ".");
				var obj = {
					id: res.id,
					company: res.get("company"),
					email: res.get("email")
				};
				return callback(null, obj);
		},
		error: function(error) {
			console.log("Error: " + error.code + " " + error.message);
			return callback(error, null);
		}
	});
};

exports.getUserByEmail = function (email, callback) {
	var query = new Parse.Query(User);
	query.equalTo('email', email);
	query.find({
		success: function(results) {
			if (results[0]) {
				console.log("Successfully retrieved " + results[0].get("email")  + ".");
				var obj = {
					id: results[0].id,
					username: results[0].get("company"),
					email: results[0].get("email")
				};
				return callback(null, obj);
			} else {
				return callback(null, null);
			}
		},
		error: function(error) {
			console.log("Error: " + error.code + " " + error.message);
			return callback(error, null);
		}
	});
};

exports.getUserByCompany= function (company, callback) {
	var query = new Parse.Query(User);
	query.equalTo('company', company);
	query.find({
		success: function(results) {
			if (results[0]) {
				console.log("Successfully retrieved " + results[0].get("company")  + ".");
				var obj = {
					id: results[0].id,
					username: results[0].get("company"),
					email: results[0].get("email")
				};
				return callback(null, obj);
			} else {
				return callback(null, null);
			}
		},
		error: function(error) {
			console.log("Error: " + error.code + " " + error.message);
			return callback(error, null);
		}
	});
};
