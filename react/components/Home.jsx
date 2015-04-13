var React = require('react/addons');
var request = require('superagent');
var Flex = require('../styles/Flex.jsx');

var MUI = require('material-ui');
var TextField = MUI.TextField;
var RaisedButton = MUI.RaisedButton;

module.exports = React.createClass({
	displayName: 'Home',
	getInitialState: function() {
		return {
			email: null,
			company: null
		};
	},
	handleEmailChange: function(e) {
		this.setState({
			email: e.target.value
		});
	},
	handleCompanyChange: function(e) {
		this.setState({
			company: e.target.value
		});
	},
	submitForm: function() {
		request
			.post('/api/signup')
			.send({ email: this.state.email, company: this.state.company })
			.set('Accept', 'application/json')
			.end(function(err, res){
			 if (res.ok) {
				 alert('yay got ' + JSON.stringify(res.body));
			 } else {
				 alert('Oh no! error ' + res.text);
			 }
			});
	},
	render: function() {
		return (
			<div style={Flex.form}>
				<TextField hintText="Email" value={this.state.email} onChange={this.handleEmailChange} />
				<TextField hintText="Company" value={this.state.company} onChange={this.handleCompanyChange} />
				<RaisedButton label="Submit" primary={true} onTouchTap={this.submitForm} />
			</div>
		);
	}
});
