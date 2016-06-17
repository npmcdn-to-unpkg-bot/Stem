var SongList = React.createClass({
	
    render: function() {
        var self = this;
		
		return (
			<div>
				<ArtistNavBar />
				<PlaylistHeader />
				<PlaylistTable />
				<PlaylistMobileView />
			</div>	
		);
	}
});
