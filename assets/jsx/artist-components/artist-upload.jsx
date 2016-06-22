var ArtistUpload = React.createClass({
  render: function () {
    var self = this;
    return (
      <div className="artist-upload-wrapper col-lg-9">
        <h3><span className="glyphicon glyphicon-headphones"></span> Upload your work <span className="glyphicon glyphicon-chevron-up artist-upload-up pull-right"></span></h3>
        <div className="artist-upload-drop col-lg-12">
          <h4><span className="glyphicon glyphicon-folder-close"></span> Drag and drop audio files or <a>Browse</a> your computer</h4>
        </div>
        <div className="artist-upload col-lg-12">
          <div className="col-lg-6">
            <p>Artist Name</p>
            <input type="" className="artist-upload-input col-lg-12" />
            <a><span className="artist-add-artist-link glyphicon glyphicon-plus-sign"></span> Add Additional Artists</a>
          </div> 
          <div className="col-lg-6">
            <p>Add Additional Artist</p>
            <input type="" className="artist-upload-input col-lg-12" />
          </div>
          <div className="col-lg-12">
            <p>Album Name</p>
            <input type="" className="artist-upload-input col-lg-12" />
          </div>
          <div className="col-lg-12">
            <p>Promotion Link</p>
            <input type="" className="artist-upload-input col-lg-12" />
          </div>
          <div className="col-lg-12">
            <p>Add Tags</p>
            <input type="" className="artist-upload-input col-lg-12" />
          </div>
          <div className="col-lg-12">
            <button type="submit" className="artist-upload-btn btn col-lg-12"><h4><span className='glyphicon glyphicon-user'></span> Upload</h4></button>
          </div>
        </div>  
      </div>
    )
  }
});