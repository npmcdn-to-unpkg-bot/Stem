var ArtistProfile = React.createClass({
  render: function() {
    return(
      <div>
        <Header />
        <div className="col-sm-10 mar-t-;g col-sm-offset-1">
          <ArtistProfileTable />
        </div>  
      </div>
    )
  }
});