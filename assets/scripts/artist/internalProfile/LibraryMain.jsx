var LibraryMain = ReactRedux.connect(function(state) {
	return {
		userInfo: state.userState.userInfo
	};
}, null)
(React.createClass({
	getInitialState: function() {
		return { 
			songs: [],
			displayedSongs: [],
			filter: 'All'
		};
	},
	componentDidMount: function() {
		var userInfo = this.props.userInfo;

		stemApi.getSongsByArtist({
			artistId: userInfo.id
		})
		.then(function(res) {
			this.setState({ 
				songs: res,
				displayedSongs: res
			});
		}.bind(this))
		.catch(function(reason) {
			console.error('Error occured while fetching songs by artist: ' + Utilities.normalizeError(reason));
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
			'All',
			'Approved',
			'Pending',
			'Disabled',
			'Rejected'
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
}));