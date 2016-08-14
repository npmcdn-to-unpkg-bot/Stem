var ArtistProfile = React.createClass({
	getInitialState: function() {
		stemApi.getSongsbyArtist({
			request: {
				id: this.props.id
			},
			success: function(data) {
				// TODO: Figure out what the actual payload looks like and then this.setState()
			}
		});
	},
	render: function() {
		var songs = [{

		}];

		return(
		  <div>
		    <Header />
		    <div className="artist-profile-wrapper col-xs-12 bg-white">
		      <div className="col-sm-10 col-sm-offset-1">
		        <ArtistProfileTable songs={songs} />
		      </div> 
		    </div>   
		  </div>
		)
	}
});
