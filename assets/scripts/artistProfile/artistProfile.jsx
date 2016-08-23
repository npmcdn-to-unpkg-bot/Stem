var ArtistProfile = React.createClass({
	getInitialState: function() {
		return {
			songs: [],
			artist: {}
		};		 
	},
	componentDidMount: function() {
		var userInfo = this.context.userInfo,
			artistId = this.props.artistId || this.context.userInfo.id;

		stemApi.getSongsByArtist({
			request: {
				artistId: artistId
			},
			success: function(data) {
				this.setState( { songs: data } );
			}.bind(this),
			error: function(error) {
				console.log('Error occured while fetching songs by artist: ' + error.responseText);
			}
		});

		this.setState({
			artist: {
				profileName: userInfo.profileName,
				bio: userInfo.bio,
				profileImageUrl: userInfo.profileImageUrl,
				bannerImageUrl: userInfo.bannerImageUrl
			}
		});
	},
	render: function() {
		return (
		<div>
			<ArtistProfileHeader artist={this.state.artist} />
			<div className="artist-profile-wrapper col-xs-12 bg-white">
		  		<div className="col-sm-10 col-sm-offset-1">
		    		<ArtistProfileTable songs={this.state.songs} />
		  		</div> 
			</div>   
		</div>
		);
	}
});

ArtistProfile.contextTypes = {
	userInfo: React.PropTypes.object
};