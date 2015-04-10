var React = require('react/addons');
var _ = require('lodash');
var MUI = require('material-ui')
var Paper = MUI.Paper;
var FlatButton = MUI.FlatButton;
var TextField = MUI.TextField;
var Toolbar = MUI.Toolbar;
var ToolbarGroup = MUI.ToolbarGroup;
var Dialog = MUI.Dialog;
var IconButton = MUI.IconButton;

module.exports = React.createClass({
	displayName: 'Widget',
	getInitialState: function() {
		return {
			title: null,
			descr: null,
			linkURL: null,
			linkTitle: null,
			links: []
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
	handleLinkURLChange: function(e) {
		this.setState({
			linkURL: e.target.value
		});
	},
	handleLinkTitleChange: function(e) {
		this.setState({
			linkTitle: e.target.value
		});
	},
	showLinkDialog: function() {
		this.refs.LinkDialog.show();
	},
	onLinkSubmit: function() {
		var links = _.clone(this.state.links);
		var link = {
			url: this.state.linkURL,
			title: this.state.linkTitle
		};
		links.push(link);
		this.setState({
			links: links,
			linkURL: null,
			linkTitle: null
		});
		this.refs.LinkDialog.dismiss();
	},
	removeLink: function(i) {
		var links = _.clone(this.state.links);
		links = _.filter(links, function(link, n) {
		  return n !== i;
		});
		this.setState({
			links: links
		});
	},
	render: function() {
		return (
			<Paper innerClassName='flex-form' zDepth={1}>
				{this.renderTitle()}
				{this.renderDescr()}
				{this.renderLinks()}
				{this.renderButtonBar()}
				{this.renderLinkDialog()}
			</Paper>
		);
	},
	renderTitle: function() {
		return (
			<Toolbar>
				<div className="flex-body">
					<TextField hintText="Title" value={this.state.title} onChange={this.handleTitleChange} />
				</div>
			</Toolbar>
		);
	},
	renderDescr: function() {
		return (
			<div className="flex-body">
				<TextField hintText="Description" multiLine={true} value={this.state.descr} onChange={this.handleDescrChange} />
			</div>
		);
	},
	renderLinks: function() {
		var self = this;
		var links = this.state.links.map(function(link, i) {
			return (
				<div key={i} className="flex-text">
					<a href={link.url} target="_blank">{link.title}</a>
					<IconButton touch={true} onTouchTap={self.removeLink.bind(self, i)}>
						<i className="fa fa-times"></i>
					</IconButton>
				</div>
			);
		});
		if (this.state.links.length) {
			return (
				<div>
					<TextField
						hintText="Links"
						disabled={true} />
					{links}
				</div>
			);
		}
	},
	renderButtonBar: function() {
		return (
			<div className="flex-body">
				<IconButton tooltip="Add Link" touch={true} onTouchTap={this.showLinkDialog}>
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
	renderLinkDialog: function() {
		var linkActions = [
			{ text: 'Cancel' },
			{ text: 'Submit', onClick: this.onLinkSubmit }
		];
		return (
			<Dialog ref="LinkDialog" title="Add Link" actions={linkActions}>
				<div className="flex-body">
					<TextField hintText="URL" value={this.state.linkURL} onChange={this.handleLinkURLChange} />
				</div>
				<div className="flex-body">
					<TextField hintText="Link Title" value={this.state.linkTitle} onChange={this.handleLinkTitleChange} />
				</div>
			</Dialog>
		);
	},
 });
