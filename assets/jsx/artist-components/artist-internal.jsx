var ArtistInternal = React.createClass({
  render: function () {
    var self = this;
    return (
      <div className="artist-internal-wrapper">
        <ArtistInternalSideBar />
        <ArtistUpload />
      </div>
    )
  }
});