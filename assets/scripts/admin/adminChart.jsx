var AdminChart = React.createClass({
	componentDidMount: function() {
		var chart = c3.generate({
			bindto: '.admin-chart',
		  data: {
		    json: [{
		      date: '2014-08-25',
		      'Can juggle many balls': 34.259,
		      'Delivers results': 57.56,
		      'Execution': 41.75734438,
		      'Focused and disciplined': 37.462
		    }, {
		      date: '2014-12-01',
		      'Can juggle many balls': 50.83314049,
		      'Delivers results': 60.69339285,
		      'Execution': 50.70495327,
		      'Focused and disciplined': 44.90770428      
		    }, {
		      date: '2015-05-04',
		      'Can juggle many balls': 52.86413524,
		      'Delivers results': 60.38042642,
		      'Execution': 50.46746163,
		      'Focused and disciplined': 41.09005214
		    }, {
		      date: '2015-09-02',
		      'Can juggle many balls': 52.56221495,
		      'Delivers results': 57.55962224,
		      'Execution': 49.63739982,
		      'Focused and disciplined': 40.90062401
		    }],
		    keys: {
		      x: 'date',
		      value: ['Can juggle many balls', 'Delivers results', 'Execution', 'Focused and disciplined']
		    }
		  },
		  axis: {
		    x: {
		      type: 'timeseries',
		      tick: {
		        format: function(x) {

		          return x.toLocaleDateString();
		          
		        }
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