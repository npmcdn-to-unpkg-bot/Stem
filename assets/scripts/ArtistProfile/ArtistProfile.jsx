var ArtistProfile = React.createClass({
	getInitialState: function() {
		return {
			songs: []
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
				// TODO: retrieve this from somewhere and pass it to <Header />
			}
		}); 
		
	},
	render: function() {
		return (
		<div>
			<Header />
			<div className="artist-profile-wrapper col-xs-12 bg-white">
		  		<div className="col-sm-10 col-sm-offset-1">
		    		<ArtistProfileTable songs={this.state.songs} />
		  		</div> 
			</div>   
		</div>
		);
	}
});