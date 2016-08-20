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
		
		// TODO: Remove me when we have more test data to work with
		// var songs = [{
		// 	songName: 'Kate is Approved',
		// 	albumName: 'Bouncing Soul Cocks',
		// 	duration: '3:25',
		// 	playCount: 234,
		// 	uses: 34,
		// 	status: 'Approved'
		// },
		// {
		// 	songName: 'Kate is Pending',
		// 	albumName: 'Bouncing Pendings',
		// 	duration: '3:25',
		// 	playCount: 234,
		// 	uses: 34,
		// 	status: 'Pending'
		// },
		// {
		// 	songName: 'Kate is Disabled',
		// 	albumName: 'Bouncing Kouls',
		// 	duration: '3:25',
		// 	playCount: 234,
		// 	uses: 34,
		// 	status: 'Disabled'
		// },
		// {
		// 	songName: 'The Rejected',
		// 	albumName: 'Rancid',
		// 	duration: '3:25',
		// 	playCount: 234,
		// 	uses: 34,
		// 	status: 'Rejected'
		// }];

		// this.setState({
		// 	songs: songs,
		// 	displayedSongs: songs
		// });
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
				<div className="sidebar sidebar-hide">
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