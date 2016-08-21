var ArtistSearchResultsTableRow = React.createClass({
	navigateToArtist: function(ev) {

	},
	render: function() {
		var song = this.props.song;
		return (
			<tr>
                <td className="col-sm-3 col-md-3 col-lg-3">
                  <img className="artist-search-album-img col-md-3 col-lg-3" src={song.albumArtUrl} />
                  <div className="artist-search-album-detail col-xs-12 col-sm-12 col-md-12 col-lg-5">
                    <h4>{song.songName}</h4>
                    <p><a onClick={this.navigateToArtist}>{song.artistName}</a></p>
                  </div>  
                </td>

                <td className="col-lg-2">
                  <h4>{song.albumName}</h4>              
                </td>

                <td className="col-lg-2">
                  <h4>{song.duration}</h4>              
                </td>

                <td className="col-lg-2">
                  <h4>{song.playCount}</h4>              
                </td>

                <td className="col-lg-2">
                  <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                  <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                  <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                  <span className="glyphicon glyphicon-star playlist-glyph star"></span>             
                </td>

                <td className="col-lg-2">
                  <a><span className="glyphicon glyphicon-heart playlist-glyph fa-lg"></span></a>
                  <a><span className="glyphicon glyphicon-plus-sign playlist-glyph fa-lg"></span></a>
                </td>
              </tr> );
	}
});