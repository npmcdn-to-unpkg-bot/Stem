var CreatorBookmarkMain = React.createClass({
  render: function() {
    return(
      <div>
        <div className="pad-box-lg">
          <h3>Bookmarks</h3>
          <p>The songs you've liked</p>
        </div>  
        <PlaylistTable />
      </div>
    )
  }
});