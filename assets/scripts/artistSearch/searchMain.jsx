var ArtistSearch = React.createClass({

  render: function() {
    var self = this;

    return (
      <div>
        <div className="sidebar search-sidebar-tablet">
          <ArtistSearchSideBar />
        </div>
        <div className="content-with-sidebar-settings">  
          <ArtistProfileTable />
        </div>  
      </div>
    )
  }
});