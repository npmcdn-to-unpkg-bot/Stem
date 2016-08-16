var ArtistProfile = React.createClass({
	getInitialState: function() {
		return {
			songs: [],
			artist: {}
		};		 
	},
	componentDidMount: function() {
		// stemApi.getSongsbyArtist({
		// 	request: {
		// 		id: this.props.id
		// 	},
		// 	success: function(data) {
		// 		// TODO: Figure out what the actual payload looks like and then this.setState()
		// 	}
		// });
		this.setState({
			songs: [
			{
				albumArtUrl: 'https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg',
				songName: 'At anyones cost',
				albumName: 'album title',
				duration: '3:26',
				playCount: '123'
			}],
			artist: {
				// TODO: retrieve this from somewhere
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