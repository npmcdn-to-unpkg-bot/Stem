var ArtistNotification = React.createClass({
  render: function() {
    return(
      <div className="artist-notification-wrapper col-lg-12">
        <div className="artist-notification-header col-lg-12">
          <h3>Notifications</h3>
          <h5>We want you to know when good things are happening</h5>
        </div>
        <div className="artist-notification-activities row no-gutters col-lg-12">
          <a className=" col-lg-2 col-lg-offset-10 pull-right check-uncheck">Check/UnCheck All</a>
          <h4 className="artist-notification-updates col-lg-12">Activities <span className="icon-paper-plane pull-right notification-icon"></span><span className="icon-phone pull-right notification-icon"></span></h4>
            <ul className="artist-notification-activities-items col-lg-12">
              <li>Someone followed you <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span></li>
              <li>Someone sent a collab request <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span></li>
              <li>Someone downloaded your music <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span></li>
              <li>Someone added you to a list <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span></li>
              <li>Someone bookmarked your music <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span></li>
              <li>Someone followed you <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span></li>
              <li>Someone followed you <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span></li>
              <li>Someone followed you <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span></li>
              <li>Someone followed you <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span></li>
              <h4 className="artist-notification-updates">Updates</h4>
              <li>News from Stem <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span></li>
              <li>Opportunities beyond promotional placements <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span></li>
            </ul>  
        </div>
      </div>
    )
  }
});