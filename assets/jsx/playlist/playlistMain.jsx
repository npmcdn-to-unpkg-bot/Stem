var SongList = React.createClass({
	
    render: function() {
        var self = this;
		
		return (
			<div>
				<PlaylistHeader />
				<PlaylistTable />
				<PlaylistMobileView />
			</div>	
		);
	}
});
