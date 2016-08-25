var SongDetailChart = React.createClass({
  componentDidMount: function() {
    var chart = c3.generate({
      bindto: '.song-detail-chart',
      data: {
        json: [{
          'Plays': 25,
          'Downloads': 3,
          'Days': 0,
        }, {
          'Plays': 100,
          'Downloads': 6,
          'Days': 1,      
        }, {
          'Plays': 40,
          'Downloads': 1,
          'Days': 2,
        }, {
          'Plays': 140,
          'Downloads': 13,
          'Days': 3,
        }, {
          'Plays': 70,
          'Downloads': 22,
          'Days': 4,
        }, {
          'Plays': 200,
          'Downloads': 9,
          'Days': 5,
        }, {
          'Plays': 10,
          'Downloads': 14,
          'Days': 6,
        }, {
          'Plays': 300,
          'Downloads': 7,
          'Days': 7,
        }, {
          'Plays': 120,
          'Downloads': 7,
          'Days': 8,
        },
         {
          'Plays': 90,
          'Downloads': 16,
          'Days': 9,
        }],
        keys: {
          x: 'Days',
          value: ['Plays', 'Downloads']
        }
      },
      axis: {
        y: {
          label: {
            // text:'# of users',
            // position: 'outer-middle'
          }
        }
      }
    });
  },  
  render: function() {
    return(
      <div className="song-detail-chart-wrapper">
        <h3 className="pad-b-md">Spins & Downloads</h3>
        <div className="song-detail-chart"></div>
      </div>  
    )
  }
});