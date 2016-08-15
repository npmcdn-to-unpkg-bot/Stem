var AdminNewSubmissionsChart = React.createClass({
	componentDidMount: function() {
		var chart = c3.generate({
			bindto: '.admin-chart',
		  data: {
		    json: [{
		       day: 0,
		      'Song Submissions': 45,
		    }, {
		      day: 1,
		      'Song Submissions': 210,      
		    }, {
		      day: 2,
		      'Song Submissions': 100,
		    }, {
		      day: 3,
		      'Song Submissions': 400,
		    }, {
		    	day: 4,
		      'Song Submissions': 160,
		    }, {
		    	day: 5,
		      'Song Submissions': 250,
		    }, {
		    	day: 6,
		      'Song Submissions': 70,
		    }, {
		    	day: 7,
		      'Song Submissions': 140,
		    }, {
		    	day: 8,
		      'Song Submissions': 300,
		    }],
		    keys: {
		      x: 'day',
		      value: ['Song Submissions']
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
})