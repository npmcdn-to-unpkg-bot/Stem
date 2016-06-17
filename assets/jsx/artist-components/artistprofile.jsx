var ArtistProfile = React.createClass({
	
    render: function() {
        var self = this;
		
		return (
			<div>
					<ArtistNavBar />
					<ArtistFeatured />
					<ArtistMainContent />
			</div>	
		);
	}
});
