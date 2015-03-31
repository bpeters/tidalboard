var React = require('react/addons');
var ReactGridLayout = require('react-grid-layout');
var MUI = require('material-ui')
var AppBar = MUI.AppBar;
var MenuItem = MUI.MenuItem;
var LeftNav = MUI.LeftNav;
var Paper = MUI.Paper;
var FlatButton = MUI.FlatButton;
var TextField = MUI.TextField;

var Widget = require('./Widget.jsx');

var MENU_ITEMS = [
	{ type: MenuItem.Types.SUBHEADER, text: 'Boards' },
	{
		 type: MenuItem.Types.LINK, 
		 payload: 'https://github.com/callemall/material-ui', 
		 text: 'Board 1' 
	}
];

module.exports = React.createClass({
	displayName: 'Main',
	propTypes: {
		params: React.PropTypes.object
	},
	toggleLeftNav: function() {
		this.refs.LeftNav.toggle();
	},
	addWidget: function() {
		
	},
	render: function() {
		return (
			<div>
				<AppBar title="Board Title" onMenuIconButtonTouchTap={this.toggleLeftNav} />
				<LeftNav ref='LeftNav' docked={false} menuItems={MENU_ITEMS} />
				<ReactGridLayout className="layout" cols={12} rowHeight={30}>
					<Paper innerClassName='flex-button' zDepth={1} key={1} _grid={{static: true, x: 0, y: 0, w: 2, h: 6}}>
						<FlatButton primary={true} onTouchTap={this.addWidget}>
							<i className="fa fa-plus"></i>
						</FlatButton>
					</Paper>
					<div key={2} _grid={{static: true, x: 2, y: 0, w: 3, h: 6}} >
						<Widget />
					</div>
				</ReactGridLayout>
			</div>
		);
	}
});
