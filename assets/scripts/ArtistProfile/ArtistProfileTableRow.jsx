var ArtistProfileTableRow = React.createClass({
	getInitialState: function () {
		return {
	  		red: false
		};
  	},
	handleLike: function (event) {
		if (event.currentTarget.className == "icon-heart-empty fa-2x" ) {
	  		event.currentTarget.className = "icon-heart red fa-2x";
		}
  	},
	render: function() {
		return (
			<tr>
			  <td className="img-td col-xs-1 row no-gutters">
			    <img className="mobile-img-thumbnail mar-r-xs" src="https://yt3.ggpht.com/-5VV8GnLPUmA/AAAAAAAAAAI/AAAAAAAAAAA/DymHh0I91f0/s900-c-k-no-rj-c0xffffff/photo.jpg" />
			  </td>
			  <td className="col-xs-1 col-md-2"><p>At Anyones Cost</p></td>
			  <td className="col-xs-1 col-md-2"><p>{this.props.albumTitle}</p></td>
			  <td className="col-xs-1"><p>3:26 {this.props.duration}</p></td>
			  <td className="col-xs-1"><p>266</p></td>
			  <td className="col-xs-1"><p><span onClick={this.handleLike} className={ this.state.red ? "icon-heart red fa-2x" : "icon-heart-empty fa-2x"}></span></p></td>
			  <td className="col-xs-1"><p><span className="icon-down-circled fa-2x"></span></p></td>
			</tr>
		);
	}
});