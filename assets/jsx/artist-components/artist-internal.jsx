var ArtistInternal = React.createClass({
  render: function () {
    var self = this;
    return (
      <div className="artist-internal-wrapper-fluid">
        <ArtistInternalSideBar />
        <div className="artist-internal-greeting col-sm-8 col-md-8 col-lg-8">
          <h3>Hello, Band Name!</h3>
        </div>
        <ArtistUpload />
        <ArtistInternalLibraryTable />
      </div>
    )
  }
});