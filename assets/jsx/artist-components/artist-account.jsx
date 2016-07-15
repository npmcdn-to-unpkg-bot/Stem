var ArtistAccountView = React.createClass({
  getInitialState: function() {
    return {
      characterCount: 0
    }
  },
  handleLineGrow: function() {
    characterCount: this.setState({characterCount: this.state.characterCount + 1});
    console.log(this.state.characterCount);
  },

  render: function() {
    var self = this;
    return (
      <div className="artist-account-form-content-wrapper col-lg-12">
          <div className="artist-account-setting-header col-lg-3">
            <h3>Account</h3>
            <h5>Update your account settings</h5>
        </div>
        <div className="artist-account-setting-upload-wrapper col-lg-12">
          <div className="artist-account-setting-profile-img col-lg-1"><h5 className="shape-details">UPLOAD PROFILE IMAGE</h5><p className="shape-details">Suggested Size 1000x1000</p></div>  
          <div className="artist-account-setting-profile-banner-img col-lg-8 col-lg-offset-1"><h5 className="shape-details">UPLOAD BANNER IMAGE</h5><p className="shape-details">Suggested Size 1000x1000</p></div>
        </div> 
        <div>
          <div className="artist-account-form-input row no-gutters col-lg-12">
            <div className="col-lg-12">  
              <h5 >Profile Name</h5>
              <input className="col-lg-4" />
            </div>
            <div className="col-lg-12 row no-gutters">  
              <h5 >Custom Link</h5>
              <input className="col-lg-4" />
              <p className="col-lg-12">http://stem.com/myprofile</p>
            </div>
            <div className="col-lg-12">
              <h5 >Email</h5>
              <input className="col-lg-4" />
            </div>
            <div className="col-lg-12">
              <h5 className="strike">Country</h5>
              <input className="col-lg-4" />
            </div>
            <div className="col-lg-12">  
              <h5 className=" strike">TimeZone</h5>
              <input className="col-lg-4" />
            </div>
          </div>

          <div className="artist-account-form-bio col-lg-12">
            <h5> Biography</h5>
            <textarea className="account-setting-bio-box col-lg-12" onChange={self.handleLineGrow} />
            <p>300 Characters</p>
          </div>  
          <div>
          </div>
          <div className="col-lg-12">
            <button className="save-btn pull-right"><h4><span className="glyphicon glyphicon-ok-circle"> </span> Save</h4></button>
          </div>
        </div>
      </div>   
    )
  }
});