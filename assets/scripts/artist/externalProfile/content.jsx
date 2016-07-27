var ArtistMainContent = React.createClass({
  render: function() {
    var self = this;

    return (
      <div className="artist-main-content-wrapper ">
        <div className="artist-suggested-wrapper row no-gutters">
         <ul className="col-lg-12 row no-gutters">
          <li className="artist-suggested-box-wrapper top-of-rock col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="suggested-box-overlay rock"></div>
            <h1 className=" col-sm-offset-1 col-md-offset-1 col-lg-offset-1">Top of Rock</h1>
            <h4 className=" col-sm-offset-1 col-md-offset-1 col-lg-8 col-lg-offset-1 ">Check out the top tracks coming to you from some of todays most and upcoming rockstars</h4>
          </li>
          <li className="artist-suggested-box-wrapper beatmakers col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="suggested-box-overlay beat"></div>
            <h1 className=" col-sm-offset-1 col-md-offset-1 col-lg-offset-1">Beat Makers</h1>
            <h4 className=" col-sm-offset-1 col-md-offset-1 col-lg-8 col-lg-offset-1 ">Check out the top tracks coming to you from some of todays most and upcoming rockstars</h4>
          </li>
          <li className="artist-suggested-box-wrapper open-roads col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="suggested-box-overlay road"></div>
            <h1 className=" col-sm-offset-1 col-md-offset-1 col-lg-offset-1">Open Roads</h1>
            <h4 className=" col-sm-offset-1 col-md-offset-1 col-lg-8 col-lg-offset-1 ">Check out the top tracks coming to you from some of todays most and upcoming rockstars</h4>
          </li>
          <li className="artist-suggested-box-wrapper creator-playlists col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="suggested-box-overlay creator"></div>
            <h1 className=" col-sm-offset-1 col-md-offset-1 col-lg-offset-1">Creator Playlists</h1>
            <h4 className=" col-sm-offset-1 col-md-offset-1 col-lg-8 col-lg-offset-1 ">Check out the top tracks coming to you from some of todays most and upcoming rockstars</h4>
          </li>
         </ul>
        </div>
      </div>
    );
  }

});