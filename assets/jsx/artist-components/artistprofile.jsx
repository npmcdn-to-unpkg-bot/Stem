var ArtistProfile = React.createClass({
	
    render: function() {
        var self = this;
		
		return (
			<div>
				<ArtistFeatured />
				<ArtistMainContent />
			</div>	
		);
	}
});
