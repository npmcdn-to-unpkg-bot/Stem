var ArtistAccountNavBar = React.createClass({
  getInitialState: function() {
    return {
      visible: true
    }
  },
  handleAccountShow: function() {
    if( this.state.visible == false ) {
      this.setState({visible: true});
    } else {
      this.setState({visible:false});
    }
  },
  render: function() {
    return (
      <div className="row no-gutters">
        <div className="artist-account-navbar-wrapper">
          <ul className="">
            <a onClick=""><li className="col-sm-12 col-md-12 col-lg-12"><h5>Account</h5></li></a>
            <a onClick=""><li className="col-sm-12 col-md-12 col-lg-12"><h5>Contact Info</h5></li></a>
            <a onClick=""><li className="col-sm-12 col-md-12 col-lg-12"><h5>Connected Accounts</h5></li></a>
            <a onClick=""><li className="col-sm-12 col-md-12 col-lg-12"><h5>Notifications</h5></li></a>
            <a onClick=""><li className="col-sm-12 col-md-12 col-lg-12"><h5>Password</h5></li></a>
          </ul>
        </div>
      </div>
    );
  }     
});
