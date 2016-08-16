var PlaylistHeader = React.createClass({

  render: function() {
    var self = this;

    return (
      <div className="playlist-header-wrapper-fluid">
        <div className="playlist-header-banner pad-box-md">
          <ul>
            <li className="">
              <h1 className="pad-t-lg">Top of Rock</h1>
            </li>
            <li>
              <h3 className="artist-subhead pad-t-md pad-b-lg pad-l-sm white">Check out the top rock tracks coming to you from some of todays most up and coming rockstars.</h3>
            </li>
            <li>
              <img src="https://s-media-cache-ak0.pinimg.com/236x/3b/09/52/3b09526181df3aebc53f181776bd8d1f.jpg" className="playlist-currator-img" />
              <div className="currator-detail-content pad-l-lg">
                <p className="playlist-currator-detail-small">currated by</p>
                <h4 className="playlist-currator-detail">This Girl 66</h4>  
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
});