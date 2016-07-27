var CreatorStatsBar = React.createClass({
  
  render: function() {
      var self = this;
  
    return (
      <div className="creator-stats-bar col-lg-12-fluid">
      <div className="creator-stats-bar-background col-lg-12"></div>
        <ul className="creator-stats-list col-xs-12 col-lg-12">
          <li className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
            <span className="icon-video-2 col-sm-1 col-lg-1"></span>
            <div className="col-sm-6 col-lg-6"> 
              <p>66</p>
              <p>Videos</p>
            </div>  
          </li>          
          <li className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
            <span className="icon-list col-sm-1 col-lg-1"></span>
            <div className="col-sm-6 col-lg-6">
              <p>66</p>
              <p>Playlists</p>
            </div>
          </li>
          <li className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
            <span className=" icon-bookmark-2 col-sm-1 col-lg-1"></span>
            <div className="col-sm-6 col-lg-6">
              <p>66</p>
              <p>Bookmarks</p>
            </div>
          </li>
          <li className="col-xs-3 col-sm-2 col-md-2 col-lg-2">
            <span className="col-sm-1 col-lg-1">Road</span>
            <div className="col-sm-6 col-lg-6">
              <p>66</p>
              <p>Timeline</p>
            </div>
          </li>
          <li className="col-sm-4 pull-right">
            <div className="text-right pull-right col-sm-12 col-md-7 col-lg-7">
              <span className="icon-youtube-1 fa-2x"></span>
              <span className="icon-twitter fa-2x"></span>
              <span className="icon-facebook fa-2x"></span>
            </div>
          </li>
        </ul>
              

      </div>      
    );
  }
});