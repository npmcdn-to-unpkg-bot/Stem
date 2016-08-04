var ArtistSearch = React.createClass({

  render: function() {
    var self = this;

    return (
      <div>
        <div className="sidebar-hide sidebar">
          <ArtistSearchSideBar />
        </div>  
        <div className="content-with-sidebar">
          <ArtistProfileTable />
        </div>
      </div>
    )
  }
});