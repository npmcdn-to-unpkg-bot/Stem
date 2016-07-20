var ArtistInternalAnalyticsTopInterests = React.createClass({
  getInitialState: function() {
    return { hovered: false }
  },
  hoverState: function() {
    if (this.state.hovered) {
      return { color: 'red' }
    } else {
      return { color: "blue" }
    }
  },

  onMouseOver : function () {
    this.setState({ hovered:true });
  },

  onMouseOut : function () {
    this.setState({ hovered:false });
  },
  render: function () {
    return(
      <div className="artist-internal-top-interest-wrapper ">
        <div className="col-lg-12">
          <h3 className="col-lg-3">Top Interest</h3>
          <h4 className="col-lg-3 pull-right"><span className="glyphicon glyphicon-eye-open"></span>View All</h4>
        </div>
        <div className="col-lg-12">
          <ul className="artist-internal-analytics-top-interest-list col-lg-12">
            <li className=""  >
              <a ><img className="artist-internal-analytics-top-interest-img "  src="https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11375351_691728300859406_959765053_n.jpg" /></a>
              <div className="artist-internal-top-interest-detail ">
                <h5>Melaina Bell</h5>
                <a>Collaborate</a>
              </div>  
            </li>
            <li className="">
              <img className="artist-internal-analytics-top-interest-img" src="https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11375351_691728300859406_959765053_n.jpg" />
              <div className="artist-internal-top-interest-detail">
                <h5>Melaina Bell</h5>
                <a>Collaborate</a>
              </div>  
            </li>
            <li className="">
              <img className="artist-internal-analytics-top-interest-img" src="https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11375351_691728300859406_959765053_n.jpg" />
              <div className="artist-internal-top-interest-detail">
                <h5>Melaina Bell</h5>
                <a>Collaborate</a>
              </div>  
            </li>
            <li className="">
              <img className="artist-internal-analytics-top-interest-img" src="https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11375351_691728300859406_959765053_n.jpg" />
              <div className="artist-internal-top-interest-detail">
                <h5>Melaina Bell</h5>
                <a>Collaborate</a>
              </div>  
            </li>
            <li className="">
              <img className="artist-internal-analytics-top-interest-img" src="https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11375351_691728300859406_959765053_n.jpg" />
              <div className="artist-internal-top-interest-detail">
                <h5>Melaina Bell</h5>
                <a>Collaborate</a>
              </div>  
            </li>
            <li className="">
              <img className="artist-internal-analytics-top-interest-img" src="https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11375351_691728300859406_959765053_n.jpg" />
              <div className="artist-internal-top-interest-detail">
                <h5>Melaina Bell</h5>
                <a>Collaborate</a>
              </div>  
            </li>
            
          </ul>
        </div>  
      </div>
    )
  }
});