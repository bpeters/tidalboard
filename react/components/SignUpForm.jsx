var React = require('react/addons');
var MUI = require('material-ui');
var TextField = MUI.TextField;
var RaisedButton = MUI.RaisedButton;

module.exports = React.createClass({
	displayName: 'SignUpForm',
	propTypes: {
		params: React.PropTypes.object
	},
	getInitialState: function() {
		return {
			email: null,
			company: null,
			password: null,
			password2: null,
			errorEmail: null,
			errorCompany: null,
			errorPassword: null,
			errorOther: null,
		};
	},
	componentDidMount: function() {
		this.generateErrors();
	},
	generateErrors: function() {
		var error = this.props.params.errors[0];
		if (error === '1') {
			this.setState({
				errorEmail: 'Email already in use',
				errorCompany: 'Company already in use',
			});
		} else if (error === '2') {
			this.setState({
				errorEmail: 'Email already in use',
			});
		} else if (error === '3') {
			this.setState({
				errorCompany: 'Company already in use',
			});
		} else {
			this.setState({
				errorOther: error.charAt(0).toUpperCase() + error.slice(1),
			});
		}
	},
	handleEmailChange: function(e) {
		this.setState({
			email: e.target.value,
			errorEmail: null,
			errorOther: null,
		});
	},
	handleCompanyChange: function(e) {
		this.setState({
			company: e.target.value,
			errorCompany: null,
		});
	},
	handlePasswordChange: function(e) {
		var err;
		if (e.target.value.length < 8) {
			err = 'Password is too short'
		} else if (e.target.value !== this.state.password2 && this.state.password2) {
			err = 'Passwords do not match'
		} else {
			err = null;
		}
		this.setState({
			password: e.target.value,
			errorPassword: err,
		});
	},
	handlePassword2Change: function(e) {
		var err;
		if (e.target.value !== this.state.password) {
			err = 'Passwords do not match'
		} else {
			err = null;
		}
		this.setState({
			password2: e.target.value,
			errorPassword: err,
		});
	},
	render: function() {
		var rdy = !this.state.email || !this.state.company || !this.state.password || !this.state.password2 || this.state.errorPassword;
		return (
			<form action="/signup" method="post" role="form" className="flex-form">
				<TextField className="flex-form-input" name="email" hintText="Email" value={this.state.email} errorText={this.state.errorEmail ? this.state.errorEmail : this.state.errorOther} onChange={this.handleEmailChange} />
				<TextField className="flex-form-input" name="company" hintText="Company" value={this.state.company} errorText={this.state.errorCompany} onChange={this.handleCompanyChange} />
				<TextField className="flex-form-input" name="password" type="password" hintText="Password" value={this.state.password} errorText={this.state.errorPassword} onChange={this.handlePasswordChange} />
				<TextField className="flex-form-input" type="password" hintText="Confirm Password" value={this.state.password2} onChange={this.handlePassword2Change} />
				<RaisedButton className="flex-form-button" label="Sign Up" primary={true} disabled={rdy} />
			</form>
		);
	}
});
