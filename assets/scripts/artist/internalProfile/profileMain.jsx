var ArtistInternal = React.createClass({
  render: function () {
    var self = this;
    return (
      <div className="artist-internal-wrapper-fluid">
          <ArtistInternalSideBar />
        <div className="content-with-sidebar bg-white">  
          <div className="artist-internal-greeting pad-t-lg pad-r-lg pad-l-lg">
            <h3>Submit Music</h3>
            <p>Add music to your library</p>
          </div>
          <div className="pad-box-lg">
            <ArtistUpload />
          </div>
        </div>     
      </div>
    )
  }
});