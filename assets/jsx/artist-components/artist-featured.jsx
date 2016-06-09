var ArtistFeatured = React.createClass({
  render: function() {
    var self = this;

    return (
      <div className="artist-featured-header">
        <div className="artist-featured-header-bar col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>
        <div className="artist-featured-header-info col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <a><span className="artist-featured-header-info-icon glyphicon glyphicon-play-circle fa-5x col-xs-1 col-sm-1 col-md-1 col-lg-1"></span></a>
            <a>
              <ul className="col-xs-9 col-xs-offset-1 col-sm-4 col-sm-offset-0 col-md-3 col-md-offset-0 col-lg-3 col-lg-offset-0">
                <li><h1>Echosmith</h1></li>
                <li><p>Album: Rad School</p></li>
                <li><p>Song: The song remains the same</p></li>
              </ul>
            </a>
        </div>
        <div className="artist-featured-badge col-xs-6 col-sm-4 col-md-4 col-lg-3 pull-right">
          <ul className="artist-featured-badge-info col-xs-4 col-sm-12 col-md-12 col-lg-12">
            <li className="col-sm-3 col-md-3 col-lg-3"><span className="glyphicon glyphicon-bookmark artist-featured-badge-icon fa-3x"></span></li>
            <li className="col-xs-3 col-sm-3 col-sm-offset-1 col-md-3 col-lg-3"><h4 >FEATURED</h4></li>
          </ul>
        </div>
      </div>
    )
  }
});