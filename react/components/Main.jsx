var React = require('react/addons');
var AppBar = require('material-ui').AppBar;
var MenuItem = require('material-ui').MenuItem;
var LeftNav = require('material-ui').LeftNav;

var MENU_ITEMS = [
	{ route: 'get-started', text: 'Get Started' },
	{ route: 'css-framework', text: 'CSS Framework' },
	{ route: 'components', text: 'Components' },
	{ type: MenuItem.Types.SUBHEADER, text: 'Resources' },
	{ 
		 type: MenuItem.Types.LINK, 
		 payload: 'https://github.com/callemall/material-ui', 
		 text: 'GitHub' 
	},
	{ 
		 text: 'Disabled', 
		 disabled: true 
	},
	{ 
		 type: MenuItem.Types.LINK, 
		 payload: 'https://www.google.com', 
		 text: 'Disabled Link',
		 disabled: true 
	},
];

module.exports = React.createClass({
	displayName: 'Main',
	propTypes: {
		params: React.PropTypes.object
	},
	getInitialState: function() {
		return {
			showLeftNav: false
		};
	},
	_toggleLeftNav: function() {
		this.refs.LeftNav.toggle();
	},
	render: function() {
		return (
			<div>
				<AppBar title="Title" onMenuIconButtonTouchTap={this._toggleLeftNav} />
				<LeftNav ref='LeftNav' docked={false} menuItems={MENU_ITEMS} />
			</div>
		);
	}
});
