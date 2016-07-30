var ArtistFeatured = React.createClass({
  render: function() {
    var self = this;

    return (
      <div className="artist-featured-header ">
        <div className="artist-featured-header-bar "></div>
        <div className="artist-featured-header-info col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <span className="artist-featured-header-info-icon icon-play-circled2 fa-5x col-xs-1 col-sm-1 col-md-1 col-lg-1"></span>
            <ul className="col-xs-9 col-xs-offset-1 pad-t-sm col-sm-4 col-sm-offset-0 col-md-4 col-md-offset-0 col-lg-3 col-lg-offset-0">
              <li><h2>Echosmith</h2></li>
              <li><p>Album: Rad School</p></li>
              <li><p>Song: The song remains the same</p></li>
            </ul>
              <div className="artist-featured-badge"><span className="icon-bookmark-2 artist-featured-badge-icon fa-3x"></span><span className="artist-featured-badge-info"><h2>FEATURED</h2></span></div>
        </div>
      </div>
    )
  }
});