var PlaylistMain = React.createClass({
	getInitialState: function() {
		return {
			displayPlayer: false
		}
	},

	showHidePlayer: function() {
		if(this.state.displayPlayer) {
			this.setState({ displayPlayer: false });
		} else {
			this.setState({ displayPlayer: true });
		}
	},
	
    render: function() {
        var self = this;
		
		return (
			<div>
				<PlaylistHeader />
				<PlaylistTable />
				<PlaylistMobileView />
				<a onClick={this.showHidePlayer}>test</a>
				{ this.state.displayPlayer ? <Player /> : null }	
			</div>	
		);
	}
});
