var ArtistInternal = React.createClass({
  render: function () {
    var self = this;
    return (
      <div className="artist-internal-wrapper">
        <ArtistInternalSideBar />
        <div className="artist-internal-greeting col-lg-9">
          <h3>Hello, Band Name!</h3>
        </div>
        <ArtistUpload />
      </div>
    )
  }
});