var ArtistProfile = React.createClass({
  render: function() {
    return(
      <div>
        <Header />
        <div className="artist-profile-wrapper col-xs-12 bg-white">
          <div className="col-sm-10 col-sm-offset-1">
            <ArtistProfileTable />
          </div> 
        </div>   
      </div>
    )
  }
});