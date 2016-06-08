var ArtistProfile = React.createClass({
	
    render: function() {
        var self = this;
		
		return (
			<div>
					<ArtistHeader />
					<ArtistStatsBar />
					<ArtistTimeline />
					<ArtistSideBarRight />
			</div>	
		);
	}
});
