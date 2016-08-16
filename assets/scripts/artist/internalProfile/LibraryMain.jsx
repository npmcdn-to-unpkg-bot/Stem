var LibraryMain = React.createClass({
	getInitialState: function() {
		return { 
			songs: []
		};
	},
	componentDidMount: function() {
		var userInfo = this.context.userInfo;

		stemApi.getSongsByArtist({
			request: {
				artistId: userInfo.id
			},
			success: function(data) {
				this.setState( { songs: data } );
			}.bind(this),
			error: function(error) {
				console.log('Error occured while fetching songs by artist: ' + error.responseText);
			}
		});

	},
	render: function() {
		return (
			<span>
				<div className="sidebar sidebar-hide">
				</div>
				<div className="content-with-sidebar">  
					<div className="artist-internal-greeting">
						<h3>Library</h3>
						<p>Manage your library of availible tracks</p>
					</div>
					<div className="btn-wrapper pull-right">
						<button type="button" className="btn-primary"><h3><span className="icon-up-circled"></span> Submit Music</h3></button>
					</div>
					<div className="library-filter">
						<ul className="pad-t-md">
							<li><h4>All</h4></li>
							<li><h4>Approved</h4></li>
							<li><h4>Pending</h4></li>
							<li><h4>Disabled</h4></li>
							<li><h4>Rejected</h4></li>
						</ul>
					</div>
					<LibraryMainTable songs={this.state.songs} />
				</div>  
			</span>
		);
	}
});

LibraryMain.contextTypes = {
	userInfo: React.PropTypes.object
};