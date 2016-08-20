var ArtistEditTrack = React.createClass({
  render: function() {
    return(
      <div className="edit-track-wrapper no-gutters">
        <div className="edit-header-detail bg-white pad-l-lg pad-t-lg">
          <h3>Edit</h3>
          <p>Edit your track(s)</p>
        </div>
        <ArtistEditList />
        <ArtistEditSong />
      </div>
    )
  }
});