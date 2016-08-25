var ArtistSongDetailHeader = React.createClass({
  getInitialState: function() {
    return {
      songLiked: false
    }
  },
  likeSong: function() {
    if (this.state.songLiked == false) {
      this.setState({ songLiked: true});
    } else {
      this.setState({ songLiked: false});
    }
  },
  render: function() {
    return(
      <div className="song-detail-wrapper">
        <img className="song-detail-img mar-box-md" src="http://www.josepvinaixa.com/blog/wp-content/uploads/2014/09/Echosmith-Cool-Kids-2013-Official.png" />
        <div className="song-detail-artist-detail">
          <h3>Cool Kids</h3>
          <h4>Echosmith</h4>
          <h4><span className="italic">Talking Dreams</span></h4>
        </div>
        <div className="song-detail-icons pull-right"> 
          <i onClick={this.likeSong} className={ this.state.songLiked ? "icon-heart-4 red fa-3x" : "icon-heart-empty-2 fa-3x"}></i>
          <i className="icon-download-3 fa-2x"></i>
        </div>  
      </div> 
    )
  }
});