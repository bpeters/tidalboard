var Parse = require('parse').Parse;
var passwordHash = require('password-hash');
var config = require('config');
var parseApp = process.env.PARSE_APP || config.get('Parse.app');
var parseJavascript = process.env.PARSE_JAVASCRIPT || config.get('Parse.javascript');

Parse.initialize(parseApp, parseJavascript);

var User = Parse.Object.extend("User");

function setUserObj(res) {
	var userObject = {
		id: res.id,
		company: res.get("company"),
		companyId: res.get("companyId"),
		email: res.get("email")
	};
	return userObject;
}

exports.logIn = function (username, password, callback) {
	Parse.User.logIn(username, password, {
		success: function(res) {
			console.log(res.get('email') + ' logged in.');
			var userObj = setUserObj(res);
			return callback(null, userObj);
		},
		error: function(user, error) {
			console.log("Error: " + error.code + " " + error.message);
			return callback(error, null);
		}
	});
};

exports.signUp = function (email, company, password, callback) {
	var companyId = passwordHash.generate(company);
	var user = new User();
	user.set("email", email);
	user.set("username", email);
	user.set("company", company);
	user.set("password", password);
	user.set("isAdmin", true);
	user.set("companyId", companyId);
	user.signUp(null, {
		success: function(res) {
			console.log(res.get('email') + ' signed up.');
			var userObj = setUserObj(res);
			return callback(null, userObj);
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
				var userObj = setUserObj(res);
				return callback(null, userObj);
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
				var userObj = setUserObj(results[0]);
				return callback(null, userObj);
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
				var userObj = setUserObj(results[0]);
				return callback(null, userObj);
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
