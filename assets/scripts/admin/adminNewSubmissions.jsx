var AdminTable = React.createClass({
	render: function() {
		return(
			<div className="admin-table row">
				<table className="col-md-12">
					<thead className="admin-table-header">
						<tr>
							<th className="col-md-2">Img</th>
							<th className="col-md-2">Artist<span className="icon-resize-vertical"></span></th>
							<th className="col-md-2">Song Title<span className="icon-resize-vertical"></span></th>
							<th className="col-md-2">Album<span className="icon-resize-vertical"></span></th>
							<th className="col-md-1">Time</th>
							<th className="col-md-2">Submitted<span className="icon-resize-vertical"></span></th>
							<th className="col-md-1">Edit</th>
						</tr>
					</thead>
					<tbody className="admin-table-body">
						<tr className="mar-b-lg">
							<td className="col-md-2"></td>
							<td className="col-md-2">InMemory</td>
							<td className="col-md-2">Track Yo!</td>
							<td className="col-md-2">When I make</td>
							<td className="col-md-1">6:26</td>
							<td className="col-md-2">2/21/85</td>
							<td className="col-md-1"><span className="icon-edit-alt"></span></td>
						</tr>
						<tr className="mar-b-lg">
							<td className="col-md-2"></td>
							<td className="col-md-2">Lola Blanc</td>
							<td className="col-md-2">Yo Momma</td>
							<td className="col-md-2">Two Times is Nuff</td>
							<td className="col-md-1">6:26</td>
							<td className="col-md-2">2/21/85</td>
							<td className="col-md-1"><span className="icon-edit-alt"></span></td>
						</tr>
						<tr className="mar-b-lg">
							<td className="col-md-2"></td>
							<td className="col-md-2">Avarice</td>
							<td className="col-md-2">Touch Me</td>
							<td className="col-md-2">Love me 2x</td>
							<td className="col-md-1">6:26</td>
							<td className="col-md-2">2/21/85</td>
							<td className="col-md-1"><span className="icon-edit-alt"></span></td>
						</tr>
						<tr className="mar-b-lg">
							<td className="col-md-2"></td>
							<td className="col-md-2">Glassjaw</td>
							<td className="col-md-2">My Junk, Junk</td>
							<td className="col-md-2">Man Humps</td>
							<td className="col-md-1">6:26</td>
							<td className="col-md-2">2/21/85</td>
							<td className="col-md-1"><span className="icon-edit-alt"></span></td>
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
				<div className="admin-new-submissions-table">

				</div>
				<h3 className="admin-new-submissions-title display-inlb primary">Songs</h3>
				<h3 className="admin-new-submissions-export-link display-inlb secondary">Export All</h3>
				<AdminTable />
			</div>
		)
	}
});