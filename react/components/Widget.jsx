var React = require('react/addons');
var MUI = require('material-ui')
var Paper = MUI.Paper;
var FlatButton = MUI.FlatButton;
var TextField = MUI.TextField;
var Toolbar = MUI.Toolbar;
var ToolbarGroup = MUI.ToolbarGroup;
var Dialog = MUI.Dialog;
var IconButton = MUI.IconButton

var LINK_ACTIONS = [
  { text: 'Cancel' },
  { text: 'Submit', onClick: this.onLinkSubmit }
];

module.exports = React.createClass({
	displayName: 'Widget',
	getInitialState: function() {
		return {
			title: null,
			descr: null
		};
	},
	handleTitleChange: function(e) {
		this.setState({
			title: e.target.value
		});
	},
	handleDescrChange: function(e) {
		this.setState({
			descr: e.target.value
		});
	},
	showLinkDialog: function() {
		this.refs.LinkDialog.show();
	},
	onLinkSubmit: function(link) {
		console.log(link);
	},
	render: function() {
		return (
			<Paper innerClassName='flex-form' zDepth={1}>
				{this.renderTitle()}
				{this.renderDescr()}
				{this.renderButtonBar()}
				<Dialog ref="LinkDialog" title="Dialog With Standard Actions" actions={LINK_ACTIONS}>
				  The actions in this window are created from the json that's passed in. 
				</Dialog>
			</Paper>
		);
	},
	renderTitle: function() {
		return (
			<Toolbar>
				<div className="flex-text">
					<TextField hintText="Title" value={this.state.title} onChange={this.handleTitleChange} />
				</div>
			</Toolbar>
		);
	},
	renderDescr: function() {
		return (
			<div className="flex-text">
				<TextField hintText="Description" multiLine={true} value={this.state.descr} onChange={this.handleDescrChange} />
			</div>
		);
	},
	renderButtonBar: function() {
		return (
			<div className="flex-button-bar">
				<IconButton tooltip="Add Link" touch={true}>
					<i className="fa fa-link"></i>
				</IconButton>
				<IconButton tooltip="Add Image" touch={true}>
					<i className="fa fa-file-image-o"></i>
				</IconButton>
				<IconButton tooltip="Add File" touch={true}>
					<i className="fa fa-file-text-o"></i>
				</IconButton>
			</div>
		);
	},
 });
