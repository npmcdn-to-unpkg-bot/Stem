var ArtistInternalSideBar = React.createClass({
  render: function () {
    var self = this;
    return (
      <div className="artist-internal-sidebar-wrapper row no-gutters col-xs-12 col-sm-4 col-md-4 col-lg-3">
        <div className="artist-internal-download-count col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3>Download Count</h3>
          <p>For current month</p>
          <h2>5,062</h2>
        </div>
        <div className="artist-internal-play-count col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3>Play Count</h3>
          <p>For the current month</p>
          <h2>20,662</h2>
        </div>
        <div className="artist-internal-top-interest col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3>Top Interest</h3>
          <ul className="">
            <li className="col-xs-12">
              <div className="col-xs-3 col-sm-4 col-md-4 col-lg-4">
                <img className="artist-internal-top-interest-img " src="https://pbs.twimg.com/media/CI7uacEUkAACUnZ.jpg" />
              </div>
              <h4 className="pull-right pad-r-sm">Daniele DeHart</h4>
            </li>
            <li className="col-xs-12">
              <div className="col-xs-3 col-sm-4 col-md-4 col-lg-4">
                <img className="artist-internal-top-interest-img " src="https://pbs.twimg.com/media/CI7uacEUkAACUnZ.jpg" />
              </div>
              <h4 className="pull-right pad-r-sm">Daniele DeHart</h4>
            </li>
            <li className="col-xs-12">
              <div className="col-xs-3 col-sm-4 col-md-4 col-lg-4">
                <img className="artist-internal-top-interest-img " src="https://pbs.twimg.com/media/CI7uacEUkAACUnZ.jpg" />
              </div>
              <h4 className="pull-right pad-r-sm">Daniele DeHart</h4>
            </li>
          </ul>
        </div> 
        <div className="artist-internal-top-regions col-xs-12 col-sm-12 col-md-12  col-lg-12">
          <h3>Top Regions</h3>
          <ul className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h4>Chicago, IL</h4>
            </li>
            <li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h4>Los Angeles, CA</h4>
            </li>
            <li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">  
              <h4>New York, NY</h4>
            </li>
            <li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h4>Seattle, WA</h4>
            </li>  
          </ul>
        </div> 
      </div>
    )
  }
});