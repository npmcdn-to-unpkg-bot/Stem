var ArtistSongDetail = React.createClass({
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
      <div className="bg-white">
        <ArtistSongDetailHeader />
        <div className="pad-box-lg">
          <SongDetailChart />
          <CreatorLove />
          <CreatorProfileYouTube />
        </div>  
      </div> 
    )
  }
});