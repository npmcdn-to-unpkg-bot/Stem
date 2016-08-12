var AdminNewArtistsTable = React.createClass({
	render: function() {
		return(
			<div className="admin-table row pad-b-lg">
				<table className="col-xs-12">
					<thead className="admin-table-header">
						<tr>
							<th className="col-xs-2">Img</th>
							<th className="col-xs-2">Name<span className="icon-resize-vertical"></span></th>
							<th className="col-xs-2">Submissions<span className="icon-resize-vertical"></span></th>
							<th className="col-xs-2">Approved<span className="icon-resize-vertical"></span></th>
							<th className="col-xs-1">Downloads<span className="icon-resize-vertical"></span></th>
							<th className="col-xs-2">#Followers<span className="icon-resize-vertical"></span></th>
							<th className="col-xs-1">Email<span className="icon-resize-vertical"></span></th>
						</tr>
					</thead>
					<tbody className="admin-table-body">
						<tr className="mar-b-xs">
							<td className="col-xs-2 img-box">
								<img className="mobile-img-thumbnail" src="http://g.purevolumecdn.com/cdnImages/crop_345x235/Artist-63512-1686734.gif"></img>
							</td>
							<td className="col-xs-2">InMemory</td>
							<td className="col-xs-2">22</td>
							<td className="col-xs-2">12</td>
							<td className="col-xs-1">66</td>
							<td className="col-xs-2">333</td>
							<td className="col-xs-1">blahblahblah@balls.onu</td>
						</tr>
						<tr className="mar-b-xs">
							<td className="col-xs-2">
								<img className="mobile-img-thumbnail" src="http://www.minxsociety.com/wp-content/uploads/2012/01/lola-blanc-music.jpg"></img>
							</td>
							<td className="col-xs-2">Lola Blanc</td>
							<td className="col-xs-2">22</td>
							<td className="col-xs-2">12</td>
							<td className="col-xs-1">626</td>
							<td className="col-xs-2">333</td>
							<td className="col-xs-1">blahblahblah@balls.onu</td>
						</tr>
						<tr className="mar-b-xs">
							<td className="col-xs-2">
								<img className="mobile-img-thumbnail" src="https://f4.bcbits.com/img/a3960757277_10.jpg"></img>
							</td>
							<td className="col-xs-2">Avarice</td>
							<td className="col-xs-2">22</td>
							<td className="col-xs-2">12</td>
							<td className="col-xs-1">266</td>
							<td className="col-xs-2">333</td>
							<td className="col-xs-1">blahblahblah@balls.onu</td>
						</tr>
						<tr className="mar-b-xs">
							<td className="col-xs-2">
								<img className="mobile-img-thumbnail" src="http://www.altpress.com/images/made/chrootimages/uploads/news/news_glassjaw_633_461_70_s_c1.jpg"></img>
							</td>
							<td className="col-xs-2">Glassjaw</td>
							<td className="col-xs-2">22</td>
							<td className="col-xs-2">12</td>
							<td className="col-xs-1">222</td>
							<td className="col-xs-2">333</td>
							<td className="col-xs-1">blahblahblah@balls.onu</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
});

var AdminNewArtistsChart = React.createClass({
	componentDidMount: function() {
		var chart = c3.generate({
			bindto: '.admin-chart',
		  data: {
		    json: [{
		       day: 0,
		      'Artists': 45,
		    }, {
		      day: 1,
		      'Artists': 210,      
		    }, {
		      day: 2,
		      'Artists': 100,
		    }, {
		      day: 3,
		      'Artists': 400,
		    }, {
		    	day: 4,
		      'Artists': 160,
		    }, {
		    	day: 5,
		      'Artists': 250,
		    }, {
		    	day: 6,
		      'Artists': 70,
		    }, {
		    	day: 7,
		      'Artists': 140,
		    }, {
		    	day: 8,
		      'Artists': 300,
		    }],
		    keys: {
		      x: 'day',
		      value: ['Artists']
		    }
		  },
		  axis: {
		    y: {
		    	label: {
		    		text:'# of users',
		    		position: 'outer-middle'
		    	}
		    }
		  }
		});
	},	


	render: function() {
		return(
			<div className="admin-chart"></div>
		)
	}
});

var AdminNewArtists = React.createClass({
	render: function() {
		return(
			<div className="">
				<h3 className="admin-data-pages-title top-title primary">Artist Sign Ups</h3>
				<div className="admin-data-pages-chart">
					<AdminNewArtistsChart />
				</div>
				<h3 className="admin-data-pages-title display-inlb primary">Artists</h3>
				<h4 className="admin-data-pages-export-link display-inlb secondary">Export All</h4>
				<AdminNewArtistsTable />
			</div>
		)
	}
})