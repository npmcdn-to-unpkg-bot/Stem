var LibraryPending = React.createClass({
  render: function() {
    return(
      <div className="col-lg-12 pad-b-md pad-t-lg row no-gutters">
        <div className='col-sm-12 col-md-12 col-lg-5'>
          <img src="http://static.tumblr.com/m1skdlz/C26n8qkur/in-return-cover.jpg" className="library-img" />
        </div>
          <h3 className="artist-internal-library-table-header pad-b-md col-sm-12 col-md-12 col-lg-7">Transmission International <span className="glyphicon glyphicon-cog pull-right"></span></h3>
        <table className="artist-internal-library-table col-sm-12 col-md-12 col-lg-7 ">
          <thead className="artist-internal-library-table-header-th bg-grey-6">
              <tr>
                <th className="col-sm-5 col-md-5 col-lg-5">Song</th>
                <th className="col-sm-3 col-md-3 col-lg-3">Time</th>
                <th className="col-sm-3 col-md-3 col-lg-3">Submitted</th>
                <th className="col-sm-1 col-md-1 col-lg-1">Status</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td className="col-sm-5 col-md-5 col-lg-5"><h4>At Anyones Cost</h4></td>
              <td className="col-sm-3 col-md-3 col-lg-3">3:26</td>
              <td className="col-sm-3 col-md-3 col-lg-3">2/21/1985</td>
              <td className="col-sm-1 col-md-1 col-lg-1">Pending</td>
            </tr>

          </tbody>
        </table>
      </div> 
    )
  }
});