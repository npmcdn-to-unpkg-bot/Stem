var ArtistInternal = React.createClass({
  render: function () {
    var self = this;
    return (
<<<<<<< HEAD
      <div className="artist-internal-wrapper row no-gutters col-xs-12 bg-white">
        <div>
          <ArtistInternalSideBar />
        </div>  
        <div className="artist-internal-greeting upload-greeting pad-t-lg pad-l-lg bg-white">
          <h3>Submit Music</h3>
          <p>Add music to your library</p>
=======
      <div className="artist-internal-wrapper-fluid">
        <ArtistInternalSideBar />
        <div className="artist-internal-greeting col-sm-7 col-md-7 col-lg-8 mar-t-lg mar-l-lg">
          <h3 className="col-lg-offset-1">Submit Music</h3>
          <p className="col-lg-offset-1">Add music to your library</p>
>>>>>>> f871c6f18eee3288cfc9edc86bfbca71b584f643
        </div>
        <div className="bg-white col-xs-8">
          <ArtistUpload />
        </div>  
      </div>
    )
  }
});