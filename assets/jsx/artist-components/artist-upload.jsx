var ArtistUpload = React.createClass({
  getInitialState: function() {
        return {
            visible: false  
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
      <div className="artist-upload-wrapper col-sm-7 col-md-7 col-lg-8">
        <a onClick={this.uploadFormToggle}><h3><span className="glyphicon glyphicon-headphones"></span> Upload your work <span className={(this.state.visible ? "glyphicon glyphicon-chevron-up artist-upload-up pull-right" : "glyphicon glyphicon-chevron-down artist-upload-up pull-right")}></span></h3></a>
        { this.state.visible ? <ArtistUploadForm /> : null}
      </div>
    )
  }
});

var ArtistUploadForm = React.createClass({
  render: function () {
    return (
      <div id="artist-upload-form">
        <div className="artist-upload-drop col-sm-12 col-md-12 col-lg-12">
          <h4><span className="glyphicon glyphicon-folder-close"></span> Drag and drop audio files or <a>Browse</a> your computer</h4>
        </div>
        <div className="artist-upload col-sm-12 col-md-12 col-lg-12">
          <div className="col-sm-12 col-lg-6">
            <p>Artist Name</p>
            <input type="" className="artist-upload-input col-sm-12 col-md-12 col-lg-12" />
            <a><span className="artist-add-artist-link glyphicon glyphicon-plus-sign"></span> Add Additional Artists</a>
          </div> 
          <div className="col-sm-12 col-lg-6">
            <p>Add Additional Artist</p>
            <input type="" className="artist-upload-input col-sm-12 col-md-12 col-lg-12" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <p>Album Name</p>
            <input type="" className="artist-upload-input col-sm-12 col-md-12 col-lg-12" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <p>Promotion Link</p>
            <input type="" className="artist-upload-input col-sm-12 col-md-12 col-lg-12" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <p>Add Tags</p>
            <input type="" className="artist-upload-input col-sm-12 col-md-12 col-lg-12" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <button type="submit" className="artist-upload-btn btn col-sm-12 col-md-12 col-lg-12"><h4><span className='glyphicon glyphicon-user'></span> Upload</h4></button>
          </div>
        </div>
      </div>  
    )
  }
});