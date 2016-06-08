var CreatorStatsBar = React.createClass({
  
  render: function() {
      var self = this;
  
    return (
      <div className="creator-stats-bar col-lg-12-fluid">
      <div className="creator-stats-bar-background col-lg-12"></div>
        <ul className="creator-stats-list col-xs-12 col-lg-12">
          <li className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
            <span className="creator-stats-icon col-sm-1 col-lg-1">s</span>
            <div className="col-sm-6 col-lg-6"> 
              <p>66</p>
              <p>Videos</p>
            </div>  
          </li>          
          <li className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
            <span className="creator-stats-icon col-sm-1 col-lg-1">s</span>
            <div className="col-sm-6 col-lg-6">
              <p>66</p>
              <p>Playlists</p>
            </div>
          </li>
          <li className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
            <span className="creator-stats-icon col-sm-1 col-lg-1">s</span>
            <div className="col-sm-6 col-lg-6">
              <p>66</p>
              <p>Bookmarks</p>
            </div>
          </li>
          <li className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
            <span className="creator-stats-icon col-sm-1 col-lg-1">s</span>
            <div className="col-sm-6 col-lg-6">
              <p>66</p>
              <p>Timeline</p>
            </div>
          </li>
          <li className="col-xs-3 col-sm-2 col-md-2 col-md-offset-1 col-lg-2 col-lg-offset-1">
            <div className="col-sm-6 col-lg-6 creator-social-icons">
              <span className="creator-social-icons">V</span>
              <span className="creator-social-icons">N</span>
              <span className="creator-social-icons">X</span>
            </div>
          </li>
        </ul>
              

      </div>      
    );
  }
});