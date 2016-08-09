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
      <div className="artist-upload-wrapper row no-gutters">
        <div className="col-xs-12">
          <h3 className="upload-links col-xs-4" onClick={this.uploadFormToggle}><span className={this.state.visible ? "upload-active-underline" : null}> Individual Song </span></h3>
          <h3 className="upload-links col-xs-3" onClick={this.uploadFormToggle}><span className={this.state.visible ? null : "upload-active-underline" }> Album </span></h3>
          { this.state.visible ? <ArtistUploadForm /> : <UploadAlbum />}
        </div> 
      </div>
    )
  }
});

var ArtistUploadForm = React.createClass({
  getInitialState: function() {
    return {
      characterCount: 0,
      disableButton: false,
      albumListVisible: false,
      albumSelection: '',
      albumNames: ['the first one', 'the black album', 'self titled', 'dookie']
    }
  },
  handleShowAlbumList: function() {
    this.setState({
      albumListVisible: true
    })
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

  handlePopulateAlbumName: function() {

    // $.ajax({
    //   type: 'GET', // rest verb (GET, POST, PUT, DEL)
    //   url: this.context.baseAPI + '/song/artist/AQAAANCMnd8BFdERjHoAwE_Cl-sBAAAArzxDmskNMEeWM8nzSfsNZQAAAAACAAAAAAAQZgAAAAEAACAAAADHNI5nQkF9G5O4P2MazMUipTjpwoIG3OL2N9FdPFHf6wAAAAAOgAAAAAIAACAAAAAHc2eP6u5H_LnInNgHFcqDjPMExAjA4-xkSiBzvY81seAAAAD4JU0N4czhXGzC5zx1UUxhZuwKn5LlSiZJZZolZ98aBLsnsEC5rLyBZ7DUfJpjig5UXGGt1Oe12LDWyTVxALQKLJS4Uprjt0hIObBGob3qgIC04C-xcgdwTtr7wVZv6mw-_vO_bzEkKTCAEzCFEMcRy9z6j_KYXSErNQyOjZlQw_UEF4h18VZa9TuWZdbsi8xIYtRVn0BassDmBagxLKIMg12ThdbO2aIm6maAawh9_K3FUgRYA-C91NbfyTPpQfV3Z9I4TMD2UNcxe-AO2FWqF5Ey3VjmlyoSXSxj-jj7F0AAAAAtnYuYzT1diW528DeOVBY5-_b-GUmiDQk9P8HgG462Hp-2lAV5vFSB5_D1EcW_qAzZPlyev6FxeUlJnkRSWKZt/albums',
    //   headers: 
    //     { 
    //       'Access-Control-Allow-Origin': 
    //       'http://52.32.255.104/api/song/artist/AQAAANCMnd8BFdERjHoAwE_Cl-sBAAAArzxDms…BY5-_b-GUmiDQk9P8HgG462Hp-2lAV5vFSB5_D1EcW_qAzZPlyev6FxeUlJnkRSWKZt/albums'
    //     },
    //   dataType: 'json',
    //   success: function (response) {
    //     console.log(JSON.stringify(response, null, 2));
    //   }
    // });
    // console.log('Album Names!');
  }, 
  selectAlbum: function() {
    this.setState({ albumSelection: e.target.value});
    console.log(this.albumSelection);
  }, 
  render: function () {
    var self = this;
    return (
      <div className="col-sm-12">
        <div className="artist-upload-drop col-sm-11">
          <h4><span className="icon-folder"></span> Drag and drop audio files or <a>Browse</a> your computer</h4>
        </div>
        <div className="artist-upload col-sm-12 col-md-12 col-lg-6 row no-gutters">
          <div className="col-sm-12">
            <p>Artist Name</p>
            <input type="" className="artist-upload-input col-sm-12" />
            <a><span className="artist-add-artist-link glyphicon glyphicon-plus-sign"></span> Add Additional Artists</a>
          </div> 
          <div className="col-sm-12">
            <p>Song Name</p>
            <input type="" className="artist-upload-input col-sm-12" />
          </div>
          <div className="artist-album-wrapper row no-gutters col-sm-12">
            <p>Album Name</p>
            <input type="" onChange={this.handleShowAlbumList} className="artist-upload-input col-sm-12 mar-b-sm" /> 
            <ul className={this.state.albumListVisible ? "display-true album-list-wrapper col-sm-12" : "display-false"}>
              {this.state.albumNames.map(function(e) {
                return <li key={e.id} value={e.id} onClick={this.selectAlbum}>{e}</li>;
              })}
            </ul>  
          </div>
          <div className="col-sm-12">
            <p>Promotion Link <span className="icon-help-circled"></span></p>
            <input type="" className="artist-upload-input col-sm-12" />
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
          <div className="artist-upload col-sm-12">
            <p>Promotional Copy ( you can edit this later )</p>
            <textarea type="" className="artist-upload-textarea col-sm-12" onChange={self.handleLineGrow} />
            <div className="character-count col-sm-12 row no-gutters ">
              <p className="col-sm-4 col-md-4 col-lg-2">{this.state.characterCount}/300 Characters</p>
                <svg className="col-sm-8 col-md-8" height="20" width="400">
                  <line className="svg-line2" x1="300" y='0' />
                  <line className="svg-line" x1={self.state.characterCount} y='0' />
                </svg>
            </div>  
          </div>
          <div className="col-sm-12">
            <button type="submit" className="btn artist-upload-btn pull-right"><h4><span className='icon-upload'></span> Upload</h4></button>
          </div>
      </div>  
    )
  }
});
// var ArtistAlbumList = React.createClass({
  // getInitialState: function() {
  //   return {
  //     albumListVisible: true,
  //     albumNames: ['the first one', 'the black album', 'self titled', 'dookie']
  //   }
  // },
  // handleShowAlbumList: function() {
  //   this.setState({
  //     albumListVisible: true
  //   })
  // },
//   render: function() {
//     return (
//       <ul className={this.state.albumListVisible ? "display-true album-list-wrapper" : "display-false"}>
//         {this.state.albumNames.map(function(e) {
//           return <li key={e.id}>{e}</li>;
//         })}
//       </ul>  
//     )
//   }
// });
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
<div className="col-sm-12">
        <div className="artist-upload-drop col-sm-11">
          <h4><span className="icon-folder"></span> Drag and drop audio files or <a>Browse</a> your computer</h4>
        </div>
        <div className="artist-upload col-sm-12 col-md-12 col-lg-6 row no-gutters">
          <div className="col-sm-12">
            <p>Artist Name</p>
            <input type="" className="artist-upload-input col-sm-12" />
            <a><span className="artist-add-artist-link glyphicon glyphicon-plus-sign"></span> Add Additional Artists</a>
          </div> 
          <div className="col-sm-12">
            <p>Song Name</p>
            <input type="" className="artist-upload-input col-sm-12" />
          </div>
          <div className="col-sm-12">
            <p>Album Name</p>
            <input type="" className="artist-upload-input col-sm-12" />
          </div>
          <div className="col-sm-12">
            <p>Promotion Link <span className="icon-help-circled"></span></p>
            <input type="" className="artist-upload-input col-sm-12" />
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 row no-gutters">
          <div className="album-art-box col-sm-12">
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
          <div className="artist-upload col-sm-12">
            <p>Promotional Copy ( you can edit this later )</p>
            <textarea type="" className="artist-upload-textarea col-sm-12" onChange={self.handleLineGrow} />
            <div className="character-count col-sm-12 row no-gutters ">
              <p className="col-sm-4 col-md-4 col-lg-2">{this.state.characterCount}/300 Characters</p>
                <svg className="col-sm-8 col-md-8" height="20" width="400">
                  <line className="svg-line2" x1="300" y='0' />
                  <line className="svg-line" x1={self.state.characterCount} y='0' />
                </svg>
            </div>  
          </div>
          <div className="col-sm-12">
            <button type="submit" className="btn artist-upload-btn pull-right"><h4><span className='icon-upload'></span> Upload</h4></button>
          </div>
      </div>  
    )
  }
});

ArtistUploadForm.contextTypes = {
  baseAPI: React.PropTypes.string
};
