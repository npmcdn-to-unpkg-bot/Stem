var ArtistInternal = React.createClass({
  render: function () {
    var self = this;
    return (
      <div className="artist-internal-wrapper-fluid">
        <ArtistInternalSideBar />
        <div className="artist-internal-greeting col-sm-7 col-md-7 col-lg-8 mar-t-lg mar-l-lg">
          <h3 className="col-lg-offset-1">Submit Music</h3>
          <p className="col-lg-offset-1">Add music to your library</p>
        </div>
        <div className="bg-white col-xs-8">
          <ArtistUpload />
        </div>  
      </div>
    )
  }
});