var SubmitMusicAlbum = React.createClass({
  render: function() {
    return(
      <div className="submit-album-form pad-box-lg">
        <form>
          <div className="submit-input-wrapper">
            <p>Artist Name</p>
            <input />
            <p>Album Name</p>
            <input />
            <p>UPC</p>
            <input placeholder="( optional )" />
          </div>
          <div className="submit-album-img mar-l-lg">
            <div className="upload-album-content">
              <i className="icon-picture-1 fa-5x"></i>
              <h4 className="pad-b-sm">Upload your album art</h4>
              <p>Recommended size: 1000x1000</p>
              <p>File Size Limit: xMB</p>
            </div>  
          </div>  
        </form>
      </div>
    )
  }
});