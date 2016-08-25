var ArtistSearchResultsTableRow = React.createClass({
	navigateToArtist: function(song) {
		store.dispatch({
			type: 'GoToPage',
			data: {
				currentPage: 110,
				pageParams: {
					artistId: song.artistId
				}
			}
		});
	},
	render: function() {
		var song = this.props.song;
		return (
			<tr>
                <td className="col-sm-3 col-md-3 col-lg-2">
                	<img className="artist-search-album-img col-md-3 col-lg-3" src={song.albumArtUrl} />
                  	<div className="artist-search-album-detail col-xs-12 col-sm-12 col-md-12 col-lg-5">
                    	<h4>{song.name}</h4>
                    	<p><a title="navigate to artist's profile" onClick={this.navigateToArtist.bind(this, song)}>{song.artistName}</a></p>
                  	</div>  
                </td>

                <td className="col-lg-2">
                	<h4>{song.albumName}</h4>              
                </td>

                <td className="col-lg-2">
                	<h4>{song.duration}</h4>              
                </td>

                <td className="col-lg-2">
<<<<<<< HEAD
                	<h4>{song.playcount}</h4>              
=======
                	<h4>{song.downloadCount}</h4>              
>>>>>>> stage
                </td>

                <td className="col-lg-2">
					<a><span className="icon-heart-empty"></span></a>             
                </td>

                <td className="col-lg-2">
					<a><span className="glyphicon icon-download-circled"></span></a>
                </td>
            </tr> );
	}
});