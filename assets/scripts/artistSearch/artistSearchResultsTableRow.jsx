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
			<tr className="artist-search-table-row">
                <td className="artist-search-track-artist col-sm-4">
                	<img className="artist-search-album-img display-inlb" src={song.albumArtUrl} />
                  	<div className="artist-search-album-detail display-inlb">
                    	<h4>{song.name}</h4>
                    	<p><a title="navigate to artist's profile" onClick={this.navigateToArtist.bind(this, song)}>{song.artistName}</a></p>
                  	</div>  
                </td>

                <td className="artist-search-table-stats col-s-3">
                	<h4>{song.albumName}</h4>              
                </td>

                <td className="artist-search-table-stats col-s-1">
                	<h4>{song.duration}</h4>              
                </td>

                <td className="artist-search-table-stats col-s-1">
                	<h4>{song.playcount}</h4>             
                </td>

                <td className="col-s-1 table-icons">
					<a><span className="icon-heart-empty fa-2x"></span></a>             
                </td>

                <td className="col-s-1 table-icons">
					<a><span className="icon-down-circled fa-2x"></span></a>
                </td>
            </tr> );
	}
});