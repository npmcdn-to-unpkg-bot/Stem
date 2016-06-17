var PlaylistHeader = React.createClass({

  render: function() {
    var self = this;

    return (
      <div className="playlist-header-wrapper-fluid">
      <div className="playlist-header-overlay"></div>
        <div className="playlist-header-banner col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <ul>
            <li><h1 className="playlist-header-header">Top of Rock</h1></li>
            <li className="col-sm-7 col-md-7 col-lg-7"><h3 className="playlist-header-content">Check out the top rock tracks coming to you from some of todays most up and coming rockstars.</h3></li>
            <li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <img src="https://s-media-cache-ak0.pinimg.com/236x/3b/09/52/3b09526181df3aebc53f181776bd8d1f.jpg" className="playlist-currator-img col-xs-2 col-sm-2 col-md-2 col-lg-2 " />
                <p className="playlist-currator-detail-small col-sm-10 col-md-10 col-lg-10">currated by</p>
                <h4 className="playlist-currator-detail col-sm-10 col-md-10 col-lg-10">This Girl 66</h4>
            </li>
          </ul>
        </div>
      </div>
    )
  }
});