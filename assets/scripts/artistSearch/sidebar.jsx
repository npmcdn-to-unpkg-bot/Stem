var ArtistSearchSideBar = React.createClass({

  render: function() {
    var self = this;

    return (
      <div className="artist-search-wrapper">
        <div className="artist-search-side-bar-wrapper row no-gutters col-sm-3 col-md-3 col-lg-3">
          <ul className="artist-search-tags-list col-md-12 col-lg-12">
            <li><button className="btn artist-search-tags"><h4>Rock and Roll <span className="icon-cancel-circled"></span></h4></button></li>
            <li><button className="btn artist-search-tags"><h4>Female Vocals <span className="icon-cancel-circled"></span></h4></button></li>
            <li><button className="btn artist-search-tags"><h4>120 BPM <span className="icon-cancel-circled"></span></h4></button></li>
            <li><button className="btn artist-search-tags"><h4>Electric Guitar <span className="icon-cancel-circled"></span></h4></button></li>
            <li><button className="btn artist-search-tags"><h4>Live Drums <span className="icon-cancel-circled"></span></h4></button></li>
          </ul>
          <ArtistSearchMobileView />
        </div>
      </div>  
    )
  }
});