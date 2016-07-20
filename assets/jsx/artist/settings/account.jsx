var ArtistAccountView = React.createClass({
  getInitialState: function() {
    return {
      characterCount: 0,
      disableButton: false
    }
  },
  handleLineGrow: function(e) {
     if (e.target.value.length == 0) {
      this.setState({characterCount: 0});
     }
     if (e.target.value.length > this.state.characterCount) {
      this.setState({characterCount: e.target.value.length});
      this.setState({disableButton: false});

      if (this.state.characterCount >= 300) {
        this.setState({characterCount: e.target.value.length});
        this.setState({disableButton: true});
        alert("You can only have up to 300 characters! You are " + (e.target.value.length - 300) + " characters over");
      }
      if (this.state.characterCount <= 300) {
        this.setState({disableButton: false});
      }

     } else {
      this.setState({characterCount: this.state.characterCount - (this.state.characterCount - e.target.value.length)});
        if (e.target.value.length == 0) {
          this.setState({characterCount: 0});
        }
     }
  },

  render: function() {
    var self = this;
    return (
      <div className="artist-account-form-content-wrapper col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
        <div className="artist-account-setting-header col-sm-12 col-md-12 col-lg-12">
            <h3>Account</h3>
            <h5>Update your account settings</h5>
        </div>
        <div className="artist-account-setting-upload-wrapper col-sm-12 col-md-3 col-lg-3" >
          <div className="col-sm-offset-4 col-md-offset-0 col-lg-12 col-lg-offset-0">
            <a><div className="artist-account-setting-profile-img"   ><h5 className="shape-details">UPLOAD PROFILE IMAGE</h5><p className="shape-details">Suggested Size 1000x1000</p></div></a>
          </div>  
        </div>
        <div className="artist-account-setting-upload-wrapper col-sm-12 col-md-9 col-lg-9"   >
          <div className="">  
            <a><div className="artist-account-setting-profile-banner-img"><h5 className="shape-details">UPLOAD BANNER IMAGE</h5><p className="shape-details">Suggested Size 1000x1000</p></div></a>
          </div>
        </div>   
          <div className="artist-account-form-input row no-gutters col-sm-8 col-md-6 col-lg-5">
            <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-12">  
              <h5 >Profile Name</h5>
              <input className=" col-xs-12 col-sm-12 col-md-12 col-lg-12"  />
            </div>
            <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-12  ">  
              <h5 >Custom Link</h5>
              <input className=" col-xs-12 col-sm-12 col-md-12 col-lg-12"  />
              <p className=" col-xs-12 col-md-12 col-lg-12  ">http://stem.com/myprofile</p>
            </div>
            <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-12  ">
              <h5 >Email</h5>
              <input className=" col-xs-12 col-sm-12 col-md-12 col-lg-12"  />
            </div>
            <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-12  ">
              <h5 className="strike">Country</h5>
              <input className="  col-xs-12 col-sm-12 col-md-12 col-lg-12"  />
            </div>
            <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-12  ">  
              <h5 className=" strike">TimeZone</h5>
              <input className=" col-xs-12 col-sm-12 col-md-12 col-lg-12"  />
            </div>
          </div>

          <div className="artist-account-form-bio col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h5> Biography</h5>
            <textarea className="account-setting-bio-box col-xs-12 col-sm-12 col-md-12 col-lg-12 " onChange={self.handleLineGrow} />
            <div className="character-count row no-gutters ">
              <p className="">300 Characters</p>
                <svg className="" height="20" width="400">
                  <line className="svg-line2" x1="300" y='0' />
                  <line className="svg-line" x1={self.state.characterCount} y='0' />
                </svg>
            {this.state.characterCount}
            </div>  
          </div>  
          <div className=" ">
            <button className="save-btn pull-right" disabled={this.state.disableButton}><h4><span className="glyphicon glyphicon-ok-circle"> </span> Save</h4></button>
          </div>
      </div>   
    )
  }
});