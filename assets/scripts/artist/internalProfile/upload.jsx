var ArtistUpload = React.createClass({
  getInitialState: function() {
        return {
            visible: true
        };
    },
    uploadFormToggle: function() {
      if ( this.state.visible == false) {
        this.setState({ visible: true });
      } else {
        this.setState({ visible: false});
      }  
    },

  render: function () {
    var self = this;
    return (
      <div className="artist-upload-wrapper row no-gutters col-sm-8 col-md-7 col-lg-8">
        <h3 className="upload-links col-sm-5 col-md-5 col-lg-4" onClick={this.uploadFormToggle}><span className={this.state.visible ? "upload-active-underline" : null}> Individual Song </span></h3>
        <h3 className="upload-links col-sm-5 col-md-5 col-lg-3" onClick={this.uploadFormToggle}><span className={this.state.visible ? null : "upload-active-underline" }> Album </span></h3>
        { this.state.visible ? <ArtistUploadForm /> : <UploadAlbum />}
      </div>
    )
  }
});

var ArtistUploadForm = React.createClass({
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
  render: function () {
    var self = this;
    return (
      <div className="col-sm-12 col-md-12 col-lg-12">
        <div className="artist-upload-drop col-sm-11 col-md-11 col-lg-11">
          <h4><span className="icon-folder"></span> Drag and drop audio files or <a>Browse</a> your computer</h4>
        </div>
        <div className="artist-upload col-sm-12 col-md-12 col-lg-6 row no-gutters">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <p>Artist Name</p>
            <input type="" className="artist-upload-input col-sm-12 col-md-12 col-lg-12" />
            <a><span className="artist-add-artist-link glyphicon glyphicon-plus-sign"></span> Add Additional Artists</a>
          </div> 
          <div className="col-sm-12 col-md-12 col-lg-12">
            <p>Song Name</p>
            <input type="" className="artist-upload-input col-sm-12 col-md-12 col-lg-12" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <p>Album Name</p>
            <input type="" className="artist-upload-input col-sm-12 col-md-12 col-lg-12" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <p>Promotion Link <span className="icon-help-circled"></span></p>
            <input type="" className="artist-upload-input col-sm-12 col-md-12 col-lg-12" />
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 row no-gutters">
          <div className="album-art-box col-sm-12 col-md-12 col-lg-12">
            <div className="upload-album-content col-lg-12">
              <span className="upload-album-art-icon icon-picture-1 fa-4x"></span>
              <div className="upload-album-art-detail">
                <h3>Upload your album art</h3>
                <p>Recommended size: 1000x1000</p>
                <p>Full Size Limit: xMB</p>
              </div>  
            </div>
          </div>
        </div>
          <div className="artist-upload col-sm-12 col-md-12 col-lg-12">
            <p>Promotional Copy ( you can edit this later )</p>
            <textarea type="" className="artist-upload-textarea col-sm-12 col-md-12 col-lg-12" onChange={self.handleLineGrow} />
            <div className="character-count col-sm-12 row no-gutters ">
              <p className="col-sm-4 col-md-4 col-lg-2">{this.state.characterCount}/300 Characters</p>
                <svg className="col-sm-8 col-md-8" height="20" width="400">
                  <line className="svg-line2" x1="300" y='0' />
                  <line className="svg-line" x1={self.state.characterCount} y='0' />
                </svg>
            </div>  
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <button type="submit" className="btn artist-upload-btn pull-right"><h4><span className='icon-upload'></span> Upload</h4></button>
          </div>
      </div>  
    )
  }
});

var UploadAlbum = React.createClass({
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
<div className="col-sm-12 col-md-12 col-lg-12">
        <div className="artist-upload-drop col-sm-11 col-md-11 col-lg-11">
          <h4><span className="icon-folder"></span> Drag and drop audio files or <a>Browse</a> your computer</h4>
        </div>
        <div className="artist-upload col-sm-12 col-md-12 col-lg-6 row no-gutters">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <p>Artist Name</p>
            <input type="" className="artist-upload-input col-sm-12 col-md-12 col-lg-12" />
            <a><span className="artist-add-artist-link glyphicon glyphicon-plus-sign"></span> Add Additional Artists</a>
          </div> 
          <div className="col-sm-12 col-md-12 col-lg-12">
            <p>Song Name</p>
            <input type="" className="artist-upload-input col-sm-12 col-md-12 col-lg-12" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <p>Album Name</p>
            <input type="" className="artist-upload-input col-sm-12 col-md-12 col-lg-12" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <p>Promotion Link <span className="icon-help-circled"></span></p>
            <input type="" className="artist-upload-input col-sm-12 col-md-12 col-lg-12" />
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 row no-gutters">
          <div className="album-art-box col-sm-12 col-md-12 col-lg-12">
            <div className="upload-album-content col-lg-12">
              <span className="upload-album-art-icon icon-picture-1 fa-4x"></span>
              <div className="upload-album-art-detail">
                <h3>Upload your album art</h3>
                <p>Recommended size: 1000x1000</p>
                <p>Full Size Limit: xMB</p>
              </div>  
            </div>
          </div>
        </div>
          <div className="artist-upload col-sm-12 col-md-12 col-lg-12">
            <p>Promotional Copy ( you can edit this later )</p>
            <textarea type="" className="artist-upload-textarea col-sm-12 col-md-12 col-lg-12" onChange={self.handleLineGrow} />
            <div className="character-count col-sm-12 row no-gutters ">
              <p className="col-sm-4 col-md-4 col-lg-2">{this.state.characterCount}/300 Characters</p>
                <svg className="col-sm-8 col-md-8" height="20" width="400">
                  <line className="svg-line2" x1="300" y='0' />
                  <line className="svg-line" x1={self.state.characterCount} y='0' />
                </svg>
            </div>  
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <button type="submit" className="btn artist-upload-btn pull-right"><h4><span className='icon-upload'></span> Upload</h4></button>
          </div>
      </div>  
    )
  }
});