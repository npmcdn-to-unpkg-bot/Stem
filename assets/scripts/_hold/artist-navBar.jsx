var ArtistNavBar = React.createClass({
  render: function() {
    var self = this;
      
      return (
        <div className="artist-navBar-wrapper col-sm-12 col-md-12 col-lg-12">
          <ul className="artist-nav-list col-sm-12 col-md-12 col-lg-12">
            <div className="internal col-sm-6 col-md-6 col-lg-6 row-fluid artist-navBar-icon-width">
              <li className="internal"><a><span className="glyphicon navIcon glyphicon-headphones col-sm-3 col-md-3 col-lg-3 fa-2x"></span></a></li>
              <li className="internal"><a><span className="glyphicon navIcon glyphicon-heart col-sm-3 col-md-3 col-lg-3 fa-2x"></span></a></li>
              <li className="internal"><a><span className="artist-navBar-icons col-sm-3 col-md-3 col-lg-3 fa-4x">,</span></a></li>
              <li className="internal"><a><span className="artist-navBar-icons col-sm-3 col-md-3 col-lg-3 fa-4x">5</span></a></li>
            </div>
            <div className="internal col-sm-6 col-md-6 col-lg-6 row-fluid artist-navBar-icon-width">
              <li className="internal"><a><span className="artist-navBar-icons col-sm-3 col-md-3 col-lg-3 fa-4x">,</span></a></li>
              <li className="internal"><a><span className="glyphicon navIcon glyphicon-music col-sm-3 col-md-3 col-lg-3 fa-2x"></span></a></li>
              <li className="internal"><a><span className="artist-navBar-icons col-sm-3 col-md-3 col-lg-3 fa-4x">.</span></a></li>
              <li className="internal"><a><span className="glyphicon navIcon glyphicon-list-alt col-sm-3 col-md-3 col-lg-3 fa-2x"></span></a></li>
            </div>  
          </ul>
        </div>
      )
  }
});