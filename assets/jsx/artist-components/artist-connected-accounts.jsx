var ArtistConnectedAccounts = React.createClass({
  render: function() {
    return(
      <div className="artist-account-contact-info-wrapper col-lg-12">
        <div className="artist-account-contact-header col-lg-12">
          <h3>Connected Accounts</h3>
          <h5>By connecting your other accounts, we'll be able to help you track your music </h5>
        </div>
        <div className="col-lg-6 row no-gutters">
          <ul className="artist-connected-links row no-gutters col-lg-12">
            <li className="col-lg-7" id="facebook"><span className="icon-facebook-squared fa-2x col-lg-1"></span><h3 className="col-lg-3">Connected</h3></li>
            <li className="col-lg-7"><span className="col-lg-1 icon-twitter-1 fa-2x "></span><h3 className="col-lg-3">Connect</h3></li>
            <li className="col-lg-7"><span className="icon-youtube fa-2x col-lg-1"></span><h3 className="col-lg-3">Connect</h3></li>
            <li className="col-lg-7"><span className="icon-soundcloud-1 fa-2x col-lg-1"></span><h3 className="col-lg-3">Connect</h3></li>
            <li className="col-lg-11"><span className="icon-soundcloud fa-2x col-lg-1"></span><input className="col-lg-10" /></li>
          </ul>
        </div>
      </div>
    )
  }
});