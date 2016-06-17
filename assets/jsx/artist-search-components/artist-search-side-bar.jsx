var ArtistSearchSideBar = React.createClass({

  render: function() {
    var self = this;

    return (
      <div className="artist-search-wrapper row">
        <div className="artist-search-side-bar-wrapper col-xs-12 col-md-3 col-lg-3">
          <ul className="artist-search-tags-list col-md-12 col-lg-12">
            <li><button className="btn artist-search-tags"><h4>Rock and Roll <span className="glyphicon glyphicon-remove-circle"></span></h4></button></li>
            <li><button className="btn artist-search-tags"><h4>Female Vocals <span className="glyphicon glyphicon-remove-circle"></span></h4></button></li>
            <li><button className="btn artist-search-tags"><h4>120 BPM <span className="glyphicon glyphicon-remove-circle"></span></h4></button></li>
            <li><button className="btn artist-search-tags"><h4>Electric Guitar <span className="glyphicon glyphicon-remove-circle"></span></h4></button></li>
            <li><button className="btn artist-search-tags"><h4>Live Drums <span className="glyphicon glyphicon-remove-circle"></span></h4></button></li>
          </ul>
          <ArtistSearchMobileView />
        </div>
      </div>  
    )
  }
});