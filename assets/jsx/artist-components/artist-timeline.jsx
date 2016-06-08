var ArtistTimeline = React.createClass({
  
  render: function() {
      var self = this;
  
    return (
      <div className="artist-timeline-wrapper col-sm-6 col-md-6 col-lg-7">
        <ul className="artist-timeline ">
          <li>
            <div className="artist-timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
            <div className="artist-timeline-panel col-xs-11 col-sm-7 col-md-7 col-lg-offset-1">
              <div className="artist-timeline-heading">
                <p className="artist-upload-timestamp col-xs-12 col-lg-12 text-muted"><i className="glyphicon glyphicon-time"></i>Uploaded Video 11 hours ago</p>
              </div>
              <div className="artist-timeline-body col-md-12 col-lg-12">
              <iframe className="artist-timeline-video" src="https://www.youtube.com/embed/ul4GBG-nEl8?rel=0&amp;controls=0&amp;showinfo=0"  allowfullscreen></iframe>
              <h4 className="artist-content-video-header ">Music Festival Mania Look</h4>
                <ul>
                  <li className="artist-content-media-description col-xs-6 col-md-6 col-lg-6">Music by: <a href="#">Avarice</a></li>  
                  <li className="artist-content-media-description col-xs-6 col-md-6 col-lg-6">Song: <a href="#">Satari</a></li>
                </ul> 
              </div>
            </div>
          </li>
          <li>
            <div className="artist-timeline-badge"><i className="glyphicon glyphicon-credit-card"></i></div>
            <div className="artist-timeline-panel col-xs-11 col-sm-11 col-md-11 col-lg-offset-1">
              <div className="artist-timeline-heading">
              <p className="artist-upload-timestamp col-xs-12 text-muted"><i className="glyphicon glyphicon-time"></i> Bookmarked new song 18 hours ago</p>
              </div>
              <div className="artist-timeline-body">
                <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/228269895&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
              </div>
            </div>
          </li>          
          <li>
            <div className="artist-timeline-badge"><i className="glyphicon glyphicon-credit-card"></i></div>
            <div className="artist-timeline-panel col-xs-11 col-sm-11 col-md-11 col-lg-offset-1">
              <div className="artist-timeline-heading">
              <p className="artist-upload-timestamp col-xs-12 text-muted"><i className="glyphicon glyphicon-time"></i>Created Playlist 1 day ago</p>
              </div>
              <div className="artist-timeline-body">
                <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/160162538&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
              </div>
            </div>
          </li>
          <li>
            <div className="artist-timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
            <div className="artist-timeline-panel col-xs-11 col-sm-11 col-md-11 col-lg-offset-1">
              <div className="artist-timeline-heading">
                <p className="artist-upload-timestamp col-xs-12 text-muted"><i className="glyphicon glyphicon-time"></i> Uploaded Video 1 day ago</p>
              </div>
              <div className="artist-timeline-body">
              <iframe width="560" height="315" className="artist-timeline-video" src="https://www.youtube.com/embed/ul4GBG-nEl8?rel=0&amp;controls=0&amp;showinfo=0"  allowfullscreen></iframe>
              <h4 className="artist-content-video-header ">Music Festival Mania Look</h4>
                <ul>
                  <li className="artist-content-media-description col-xs-6 col-md-4 col-lg-3">Music by: <a href="#">Avarice</a></li>  
                  <li className="artist-content-media-description col-xs-6 col-md-4 col-lg-3">Song: <a href="#">Satari</a></li>
                </ul> 
              </div>
            </div>
          </li>          
          <li>
            <div className="artist-timeline-badge"><i className="glyphicon glyphicon-credit-card"></i></div>
            <div className="artist-timeline-panel col-xs-11 col-sm-11 col-md-11 col-lg-offset-1">
              <div className="artist-timeline-heading">
              <p className="artist-upload-timestamp col-xs-12 text-muted"><i className="glyphicon glyphicon-time"></i> Posted 3 days ago</p>
                <h4 className="artist-timeline-title">Mussum ipsum cacilds</h4>
              </div>
              <div className="artist-timeline-body">
                <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="artist-timeline-badge"><i className="glyphicon glyphicon-credit-card"></i></div>
            <div className="artist-timeline-panel col-xs-11 col-sm-11 col-md-11 col-lg-offset-1">
              <div className="artist-timeline-heading">
              <p className="artist-upload-timestamp col-xs-12 text-muted"><i className="glyphicon glyphicon-time"></i> Posted 4 ago</p>
                <h4 className="artist-timeline-title">Mussum ipsum cacilds</h4>
              </div>
              <div className="artist-timeline-body">
                <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
              </div>
            </div>
          </li>

        </ul>
      </div>       
    );
  }
});