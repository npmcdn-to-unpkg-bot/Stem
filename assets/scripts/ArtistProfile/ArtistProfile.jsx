var ArtistProfile = React.createClass({
	getInitialState: function() {
		return {
			songs: [],
			artist: {}
		};		 
	},
	componentDidMount: function() {
		stemApi.getSongsByArtist({
			request: {
				id: this.props.id
			},
			success: function(data) {
				this.setState( { songs: data } );
			}.bind(this),
			error: function(error) {
				console.log('Error occured while fetching songs by artist: ' + error);
			}
		});

		var userInfo = this.context.userInfo;

		// This is test data, keeping this for now
		// TODO: Remove me later when we have more test data to work with
		// var userInfo = {
		// 	profileName: 'InMemory',
		// 	bio: 'The best band thats ever had the pleasure of playing instruments on a stage with live people, not dead',
		// 	profileImageUrl: 'https://a4-images.myspacecdn.com/images03/33/588cae99266a4ae2a9c49c909b02781c/300x300.jpg',
		// 	bannerImageUrl: 'https://a4-images.myspacecdn.com/images03/33/588cae99266a4ae2a9c49c909b02781c/300x300.jpg'
		// };

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