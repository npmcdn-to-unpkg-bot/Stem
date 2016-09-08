var LibraryMain = React.createClass({
	getInitialState: function() {
		return { 
			songs: [],
			displayedSongs: [],
			filter: 'All'
		};
	},
	componentDidMount: function() {
		var userInfo = this.context.userInfo;

		stemApi.getSongsByArtist({
			request: {
				artistId: userInfo.id
			},
			success: function(data) {
				this.setState({ 
					songs: data,
					displayedSongs: data
				});
			}.bind(this),
			error: function(error) {
				console.log('Error occured while fetching songs by artist: ' + error.responseText);
			}
		});
	},
	handleFilter: function(ev) {
		var newFilter = ev.currentTarget.innerText.trim();
		this.setState({
			filter: newFilter,
			displayedSongs: this.state.songs.filter(function(item) {
				return item.status === newFilter 
					|| newFilter === 'All';
			}.bind(this))
		});
	},
	getFilterList: function() {
		var filterList = [
			'Live',
			'Approved',
			'Pending',
		];

		return filterList.map(function(filter, index) {
			var selectedClass = this.state.filter === filter ? 'selected' : null;

			return (
				<li key={index} onClick={this.handleFilter}><h4 className={selectedClass}>{filter}</h4></li>
			);
		}.bind(this));
	},
	render: function() {
		return (
			<span>
				<div className="sidebar artist-internal-sidebar-wrapper sidebar-hide">
					<ArtistInternalSideBar />
				</div>
				<div className="content-with-sidebar">  
					<div className="artist-internal-greeting">
						<h3>Library</h3>
						<p>Manage your library of available tracks</p>
					</div>
					<div className="btn-wrapper pull-right">
						<button type="button" className="btn-primary"><h3><span className="icon-up-circled"></span> Submit Music</h3></button>
					</div>
					<div className="library-filter">
						<ul className="pad-t-md">
							{this.getFilterList()}
						</ul>
					</div>
					<LibraryMainTable songs={this.state.displayedSongs} />
				</div>  
			</span>
		);
	}
});

LibraryMain.contextTypes = {
	userInfo: React.PropTypes.object
};