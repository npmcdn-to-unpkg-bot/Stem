var ArtistInternalAnalyticsDownloads = React.createClass({
  getInitialState: function() {
        return {
            songOne: 91,
            songTwo: 138,
            songThree: 50,
            songFour: 101,
            songFive: 138,
            songSix: 38,
            songSeven: 80,
            songEight: 188,
            songNine: 50
        }
    },
  render: function () {

    var self = this;
    return (
      <div className="artist-internal-analyitics-download-wrapper col-xs-12 content">
        <div className="artist-internal-analyitics-download-header col-sm-11 col-md-12 col-lg-12">
          <h3 className="col-sm-3 col-md-3 col-lg-2">Downloads</h3>
          <h4 className="col-sm-9 col-md-7 col-lg-4 pull-right"><span className="glyphicon glyphicon-calendar"></span> Week of 2/21/2016 - 2/28/2016 <span className="glyphicon glyphicon-chevron-down"></span></h4>
        </div>
        <div className="artist-internal-analyitics-download-value-labels col-sm-1 col-sm-offset-0 col-md-1 col-md-offset-0 col-lg-1 col-lg-offset-1">
        <div className="artist-internal-download-label col-sm-1 col-md-1 col-lg-1">
          <h5>Downloads</h5>
        </div>
          <ul className="col-sm-1 col-md-1 col-lg-1 pull-right">
            <li>200</li>
            <li>150</li>
            <li>100</li>
            <li>50</li>
            <li>0</li>
          </ul>
        </div>
          <div className="bar-graph-background-wrapper ">
            <div className="bar-graph-background">
              <div className="bar-graph-background-panels"></div>
              <div className="bar-graph-background-panels-light"></div>
              <div className="bar-graph-background-panels"></div>
              <div className="bar-graph-background-panels-light"></div>
            </div>  
            <div className="graph-content-wrapper">
              <ul className="bar-labels">
                <li>
                  <h1>{this.state.songOne}</h1>
                  <p>Song 1</p>
                </li>
                <li>
                  <h1>{this.state.songTwo}</h1>
                  <p>Song 2</p>
                </li>
                <li>
                  <h1>{this.state.songThree}</h1>
                  <p>Song 3</p>
                </li>
                <li>
                  <h1>{this.state.songFour}</h1>
                  <p>Song 4</p>
                </li>
                <li>
                  <h1>{this.state.songFive}</h1>
                  <p>Song 5</p>
                </li>
                <li>
                  <h1>{this.state.songSix}</h1>
                  <p>Song 6</p>
                </li>
                <li>
                  <h1>{this.state.songSeven}</h1>
                  <p>Song 7</p>
                </li>
                <li>
                  <h1>{this.state.songEight}</h1>
                  <p>Song 8</p>
                </li>
                <li>
                  <h1>{this.state.songNine}</h1>
                  <p>Song 9</p>
                </li>
              </ul>  
            <div className="bar-svg ">
              <ul>
                <li>
                  <svg>
                    <line className="graph-bar" x1="0" y1= {this.state.songOne} />
                  </svg>
                </li>
                <li>
                  <svg>
                    <line className="graph-bar" x1="0" y1={this.state.songTwo} />
                  </svg>
                </li>
                <li>
                  <svg>
                    <line className="graph-bar" x1="0" y1={this.state.songThree} />
                  </svg>
                </li>
                <li>
                  <svg>
                    <line className="graph-bar" x1="0" y1={this.state.songFour} />
                  </svg>
                </li>
                <li>
                  <svg>
                    <line className="graph-bar" x1="0" y1={this.state.songFive} />
                  </svg>
                </li>
                <li>
                  <svg>
                    <line className="graph-bar" x1="0" y1={this.state.songSix} />
                  </svg>
                </li>
                <li>
                  <svg>
                    <line className="graph-bar" x1="0" y1={this.state.songSeven} />
                  </svg>
                </li>
                <li>
                  <svg>
                    <line className="graph-bar" x1="0" y1={this.state.songEight} />
                  </svg>
                </li>
                <li>
                  <svg>
                    <line className="graph-bar" x1="0" y1={this.state.songNine} />
                  </svg>
                </li>
 
             
              </ul>  
            </div>
          </div>  
        </div>

      </div>
    );
  }
});

