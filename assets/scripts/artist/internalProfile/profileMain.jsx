var ArtistInternal = React.createClass({
  render: function () {
    var self = this;
    return (
      <div className="artist-internal-wrapper row no-gutters col-xs-12 bg-white">
        <div>
          <ArtistInternalSideBar />
        </div>  
        <div className="artist-internal-greeting upload-greeting pad-t-lg pad-l-lg bg-white">
          <h3>Submit Music</h3>
          <p>Add music to your library</p>
        </div>
        <div className="bg-white col-xs-8">
          <ArtistUpload />
        </div>  
      </div>
    )
  }
});