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

		this.setState({
			artist: {
				// TODO: We should populate this from the API
				artistName: 'InMemory',
				bio: 'InMemory is pretty much the greatest band that you haven\u0027t heard of. Game of Thrones has Jon Snow. The Walking Dead has Daryl. Pokemon have Pikachu. Your ears have InMemory.',
				headerImageUrl: 'https://a4-images.myspacecdn.com/images03/33/588cae99266a4ae2a9c49c909b02781c/300x300.jpg'
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