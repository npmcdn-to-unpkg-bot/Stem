var FeaturedArtist = React.createClass({
  render: function () {
    var featuredBackground = {
      backgroundImage: 'url(' + 'http://artandmotion.com/wp-content/uploads/2014/01/Karmin_Look_-5_6032.jpg' + ')'
    };
    return(
      <div>
        <div style={featuredBackground} className="featured-wrapper pad-r-lg">
          <div className="featured-overlay"></div>
          <div className="featured-content">
            <h2>Listen to</h2>
            <span className="featured-artist-name">Karmin</span>
            <span className="featured-artist-song red"><h4>Song titles are rad</h4></span>
            <div className="pad-t-sm pad-b-sm"><span className="icon-heart fa-2x red"></span> 626</div>
            <div className="featured-description">
              <h4>Hailing from some place that i don't know. Karmin brings an intensity to disrupting industry with crazy cool, synth pop, architectural tonology and stuff.</h4>
            </div>
          </div>
          <div className="play">  
            <button className="play-btn"><h3 className="icon-play fa-2x pad-box-sm">PLAY NOW</h3></button>
            <a><p>Go to artist page</p></a>
          </div>
          <TopAlbums />  
        </div>  
      </div>
    )
  }
});