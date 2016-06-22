var ArtistUpload = React.createClass({
  render: function () {
    var self = this;
    return (
      <div className="artist-upload-wrapper col-lg-9">
        <h3><span className="glyphicon glyphicon-headphones"></span> Upload your work</h3>
        <div className="artist-upload-drop col-lg-12">
          <h4><span className="glyphicon glyphicon-folder-close"></span> Drag and drop audio files or <a>Browse</a> your computer</h4>
        </div>
      </div>
    )
  }
});