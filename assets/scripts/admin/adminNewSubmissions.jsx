var AdminNewSubmissionsTable = React.createClass({
	render: function() {
		return(
			<div className="admin-table row pad-b-lg">
				<table className="col-xs-12">
					<thead className="admin-table-header">
						<tr>
							<th className="col-xs-2">Img</th>
							<th className="col-xs-2">Artist<span className="icon-resize-vertical"></span></th>
							<th className="col-xs-2">Song Title<span className="icon-resize-vertical"></span></th>
							<th className="col-xs-2">Album<span className="icon-resize-vertical"></span></th>
							<th className="col-xs-1">Time</th>
							<th className="col-xs-2">Submitted<span className="icon-resize-vertical"></span></th>
							<th className="col-xs-1">Edit</th>
						</tr>
					</thead>
					<tbody className="admin-table-body">
						<tr className="mar-b-xs">
							<td className="col-xs-2 img-box">
								<img className="mobile-img-thumbnail" src="http://g.purevolumecdn.com/cdnImages/crop_345x235/Artist-63512-1686734.gif"></img>
							</td>
							<td className="col-xs-2">InMemory</td>
							<td className="col-xs-2">Track Yo!</td>
							<td className="col-xs-2">When I make</td>
							<td className="col-xs-1">6:26</td>
							<td className="col-xs-2">2/21/85</td>
							<td className="col-xs-1"><span className="icon-edit-alt"></span></td>
						</tr>
						<tr className="mar-b-xs">
							<td className="col-xs-2">
								<img className="mobile-img-thumbnail" src="http://www.minxsociety.com/wp-content/uploads/2012/01/lola-blanc-music.jpg"></img>
							</td>
							<td className="col-xs-2">Lola Blanc</td>
							<td className="col-xs-2">Yo Momma</td>
							<td className="col-xs-2">Two Times is Nuff</td>
							<td className="col-xs-1">6:26</td>
							<td className="col-xs-2">2/21/85</td>
							<td className="col-xs-1"><span className="icon-edit-alt"></span></td>
						</tr>
						<tr className="mar-b-xs">
							<td className="col-xs-2">
								<img className="mobile-img-thumbnail" src="https://f4.bcbits.com/img/a3960757277_10.jpg"></img>
							</td>
							<td className="col-xs-2">Avarice</td>
							<td className="col-xs-2">Touch Me</td>
							<td className="col-xs-2">Love me 2x</td>
							<td className="col-xs-1">6:26</td>
							<td className="col-xs-2">2/21/85</td>
							<td className="col-xs-1"><span className="icon-edit-alt"></span></td>
						</tr>
						<tr className="mar-b-xs">
							<td className="col-xs-2">
								<img className="mobile-img-thumbnail" src="http://www.altpress.com/images/made/chrootimages/uploads/news/news_glassjaw_633_461_70_s_c1.jpg"></img>
							</td>
							<td className="col-xs-2">Glassjaw</td>
							<td className="col-xs-2">My Junk, Junk</td>
							<td className="col-xs-2">Man Humps</td>
							<td className="col-xs-1">6:26</td>
							<td className="col-xs-2">2/21/85</td>
							<td className="col-xs-1"><span className="icon-edit-alt"></span></td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
})

var AdminNewSubmissions = React.createClass({
	render: function() {
		return(
			<div className="">
				<h3 className="admin-new-submissions-title top-title primary">Submissions</h3>
				<div className="admin-new-submissions-chart">
					<AdminNewSubmissionsChart />
				</div>
				<h3 className="admin-new-submissions-title display-inlb primary">Songs</h3>
				<h4 className="admin-new-submissions-export-link display-inlb secondary">Export All</h4>
				<AdminNewSubmissionsTable />
			</div>
		)
	}
});