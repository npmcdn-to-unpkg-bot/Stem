var ArtistNotification = React.createClass({
  	render: function() {
    	return(
            <div className="content-with-sidebar"> 
		        <div className="divider col-xs-12"></div>
		        <div className="artist-notification-header col-xs-12">
					<h3>Notifications</h3>
				    <h5>We want you to know when good things are happening</h5>
		        </div>
		        <div className="artist-notification-activities row no-gutters col-xs-12">
		            <a className=" col-lg-2 col-lg-offset-10 pull-right check-uncheck">Check/UnCheck All</a>
		            <h4 className="artist-notification-updates col-xs-12">Activities <span className="icon-paper-plane pull-right notification-icon"></span><span className="icon-mobile pull-right notification-icon"></span></h4>
		            <ul className="artist-notification-activities-items col-xs-12">
		              <li>
		                <span className="notification-list-item">Someone followed you </span> <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span>
		              </li>
		              <li>
		                <span className="notification-list-item">Someone sent a collab request </span> <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span>
		              </li>
		              <li>
		                <span className="notification-list-item">Someone downloaded your music </span> <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span>
		              </li>
		              <li>
		                <span className="notification-list-item">Someone added you to a list </span> <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span>
		              </li>
		              <li>
		                <span className="notification-list-item">Someone bookmarked your music </span> <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span>
		              </li>
		              <li>
		                <span className="notification-list-item">Someone followed you </span> <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span>
		              </li>
		              <li>
		                <span className="notification-list-item">Someone followed you </span> <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span>
		              </li>
		              <li>
		                <span className="notification-list-item">Someone followed you </span> <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span>
		              </li>
		              <li>
		                <span className="notification-list-item">Someone followed you </span> <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span>
		              </li>
		              <h4 className="artist-notification-updates">Updates</h4>
		              <li>
		                <span className="notification-list-item">News from Stem </span> <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span>
		              </li>
		              <li>
		                <span className="notification-list-item">Opportunities beyond promotional placements </span> <span className="pull-right"><input type="checkbox" /><input type="checkbox" /></span>
		              </li>
		            </ul>  
		        </div>
      		</div>
    	)
  	}
});