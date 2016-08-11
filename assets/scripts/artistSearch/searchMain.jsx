var ArtistSearch = React.createClass({

  render: function() {
    var self = this;

    return (
      <div className="">
        <div className="sidebar search-sidebar-tablet">
          <ArtistSearchSideBar />
        </div>
        <div className="content-with-sidebar ">  
          <ArtistProfileTable />
        </div>  
      </div>
    )
  }
});