var ArtistSearchSideBar = React.createClass({

  render: function() {
    var self = this;

    return (
      <div className="artist-search-wrapper sidebar">
        <div className="artist-search-side-bar-wrapper row no-gutters">
          <ul className="artist-search-tags-list">
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