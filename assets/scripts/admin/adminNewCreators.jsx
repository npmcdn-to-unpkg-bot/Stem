var AdminNewCreatorsTable = React.createClass({
	render: function() {
		return(
			<div className="admin-table row pad-b-lg">
				<table className="col-xs-12">
					<thead className="admin-table-header">
						<tr>
							<th className="col-xs-1">Img</th>
							<th className="col-xs-1">Title<span className="icon-resize-vertical"></span></th>
							<th className="col-xs-1">URL<span className="icon-resize-vertical"></span></th>
							<th className="col-xs-1">Views<span className="icon-resize-vertical"></span></th>
							<th className="col-xs-1">Subscribers<span className="icon-resize-vertical"></span></th>
							<th className="col-xs-1"># Videos<span className="icon-resize-vertical"></span></th>
							<th className="col-xs-1">Joined<span className="icon-resize-vertical"></span></th>
							<th className="col-xs-1">WL<span className="icon-resize-vertical"></span></th>
						</tr>
					</thead>
					<tbody className="admin-table-body">
						<tr className="mar-b-xs">
							<td className="col-xs-1 img-box">
								<img className="mobile-img-thumbnail" src="https://pbs.twimg.com/profile_images/667703503175847937/jLOiCElg.png"></img>
							</td>
							<td className="col-xs-1">Flula</td>
							<td className="col-xs-1">flulachannel</td>
							<td className="col-xs-1">86,715,139</td>
							<td className="col-xs-1">780,173</td>
							<td className="col-xs-1">333</td>
							<td className="col-xs-1">2/21/85</td>
							<td className="col-xs-1"><input type='checkbox'></input></td>
						</tr>
						<tr className="mar-b-xs">
							<td className="col-xs-1 img-box">
								<img className="mobile-img-thumbnail" src="https://pbs.twimg.com/profile_images/667703503175847937/jLOiCElg.png"></img>
							</td>
							<td className="col-xs-1">Flula</td>
							<td className="col-xs-1">flulachannel</td>
							<td className="col-xs-1">86,715,139</td>
							<td className="col-xs-1">780,173</td>
							<td className="col-xs-1">333</td>
							<td className="col-xs-1">2/21/85</td>
							<td className="col-xs-1"><input type='checkbox'></input></td>
						</tr>
						<tr className="mar-b-xs">
							<td className="col-xs-1 img-box">
								<img className="mobile-img-thumbnail" src="https://pbs.twimg.com/profile_images/667703503175847937/jLOiCElg.png"></img>
							</td>
							<td className="col-xs-1">Flula</td>
							<td className="col-xs-1">flulachannel</td>
							<td className="col-xs-1">86,715,139</td>
							<td className="col-xs-1">780,173</td>
							<td className="col-xs-1">333</td>
							<td className="col-xs-1">2/21/85</td>
							<td className="col-xs-1"><input type='checkbox'></input></td>
						</tr>
						<tr className="mar-b-xs">
							<td className="col-xs-1 img-box">
								<img className="mobile-img-thumbnail" src="https://pbs.twimg.com/profile_images/667703503175847937/jLOiCElg.png"></img>
							</td>
							<td className="col-xs-1">Flula</td>
							<td className="col-xs-1">flulachannel</td>
							<td className="col-xs-1">86,715,139</td>
							<td className="col-xs-1">780,173</td>
							<td className="col-xs-1">333</td>
							<td className="col-xs-1">2/21/85</td>
							<td className="col-xs-1"><input type='checkbox'></input></td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
});

var AdminNewCreatorsChart = React.createClass({
	componentDidMount: function() {
		var chart = c3.generate({
			bindto: '.admin-chart',
		  data: {
		    json: [{
		       day: 0,
		      'Paid': 45,
		      'Free Trial': 100,
		    }, {
		      day: 1,
		      'Paid': 210,      
		      'Free Trial': 40,
		    }, {
		      day: 2,
		      'Paid': 100,
		      'Free Trial': 200,
		    }, {
		      day: 3,
		      'Paid': 400,
		      'Free Trial': 320,
		    }, {
		    	day: 4,
		      'Paid': 160,
		      'Free Trial': 50,
		    }, {
		    	day: 5,
		      'Paid': 250,
		      'Free Trial': 140,
		    }, {
		    	day: 6,
		      'Paid': 70,
		      'Free Trial': 230,
		    }, {
		    	day: 7,
		      'Paid': 140,
		      'Free Trial': 100,
		    }, {
		    	day: 8,
		      'Paid': 300,
		      'Free Trial': 150,
		    }],
		    keys: {
		      x: 'day',
		      value: ['Paid', 'Free Trial']
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

var AdminNewCreators = React.createClass({
	render: function() {
		return(
			<div className="">
				<h3 className="admin-data-pages-title top-title primary">Creator Sign Ups</h3>
				<div className="admin-data-pages-chart">
				<AdminNewCreatorsChart />
				</div>
				<h3 className="admin-data-pages-title display-inlb primary">Creators</h3>
				<h4 className="admin-data-pages-export-link display-inlb secondary">Export All</h4>
				<AdminNewCreatorsTable />
			</div>
		)
	}
})