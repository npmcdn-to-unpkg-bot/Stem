var ArtistAccountNavBar = React.createClass({
  getInitialState: function() {
    return {
      visible: false
    }
  },
  render: function() {
    return (
      <div className="row no-gutters">
        <div className="artist-account-navbar-wrapper col-lg-2">
          <ul className="">
            <a onClick=""><li className="col-lg-12"><h5>Account</h5></li></a>
            <a onClick=""><li className="col-lg-12"><h5>Contact Info</h5></li></a>
            <a onClick=""><li className="col-lg-12"><h5>Connected Accounts</h5></li></a>
            <a onClick=""><li className="col-lg-12"><h5>Notifications</h5></li></a>
            <a onClick=""><li className="col-lg-12"><h5>Password</h5></li></a>
          </ul>
        </div>
        <div className="artist-account-form-content-wrapper col-lg-10">
          { this.state.visible ? <ArtistAccountView /> : null}
        </div>
      </div>
    );
  }     
});
