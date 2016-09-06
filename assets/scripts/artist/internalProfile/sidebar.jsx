var ArtistInternalSideBar = React.createClass({
  render: function () {
    var self = this;
    return (
      <div className="artist-internal-sidebar hide-mobile">
        <div className="artist-internal-sidebar-spin-count pad-t-md pad-b-md pad-l-md">
          <h3 className="pad-b-md">Spin Count</h3>
          <p>For the current month</p>
          <h2 className="primary">5,062</h2>
        </div>

        <div className="artist-internal-sidebar-pick-ups pad-t-md pad-b-md pad-l-md">
          <h3 className="pad-b-md">Pick Ups</h3>
          <p>For the current month</p>
          <h2 className="primary">20,662</h2>
        </div>

        <div className="artist-internal-sidebar-top-interests pad-t-md pad-b-md pad-l-md">
          <h3 className="mar-b-sm">Top Interest</h3>
          <ul>
            <li className="pad-b-sm">
              <img className="artist-internal-top-interest-img" src="https://pbs.twimg.com/media/CI7uacEUkAACUnZ.jpg" />
              <h4 className="display-inlb mar-l-md">Daniele DeHart</h4>
            </li>
            <li className="pad-b-sm">
              <img className="artist-internal-top-interest-img" src="https://pbs.twimg.com/media/CI7uacEUkAACUnZ.jpg" />
              <h4 className="display-inlb mar-l-md">Daniele DeHart</h4>
            </li>
            <li className="pad-b-sm">
              <img className="artist-internal-top-interest-img" src="https://pbs.twimg.com/media/CI7uacEUkAACUnZ.jpg" />
              <h4 className="display-inlb mar-l-md">Daniele DeHart</h4>
            </li>
          </ul>
        </div>

        <div className="artist-internal-top-regions pad-t-md pad-l-md">
          <h3 className="pad-b-md">Top Regions</h3>
          <ul className="">
            <li className="mar-b-sm">
              <h4>Chicago, IL</h4>
            </li>
            <li className="mar-b-sm">
              <h4>Los Angeles, CA</h4>
            </li>
            <li className="mar-b-sm">  
              <h4>New York, NY</h4>
            </li>
            <li className="mar-b-lg">
              <h4>Seattle, WA</h4>
            </li>  
          </ul>
        </div> 
      </div>
    )
  }
});