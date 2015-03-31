var React = require('react/addons');
var AppBar = require('material-ui').AppBar;
var MenuItem = require('material-ui').MenuItem;
var LeftNav = require('material-ui').LeftNav;
var Paper = require('material-ui').Paper;
var ReactGridLayout = require('react-grid-layout');

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
				<ReactGridLayout className="layout" cols={1} rowHeight={30}>
					<Paper zDepth={1} key={1} _grid={{x: 0, y: 0, w: 1, h: 2}}>
						<p>1</p>
					</Paper>
					<Paper zDepth={1} key={2} _grid={{x: 0, y: 1, w: 1, h: 2}}>
						<p>2</p>
					</Paper>
					<Paper zDepth={1} key={3} _grid={{x: 0, y: 2, w: 1, h: 2}}>
						<p>3</p>
					</Paper>
				</ReactGridLayout>
			</div>
		);
	}
});
