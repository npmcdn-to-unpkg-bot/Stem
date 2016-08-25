var Header = (function() {
	var NavBar = React.createClass({
	    getInitialState: function () {
	        return {
				currentPage: this.props.currentPage,
	            displayMenu: false,
	            displaySearch: false,
				autofocus: true,
				searchString: '',
				songList: this.props.songList,
				tagList: this.props.tagList
	        }
	    },

	    getSongList: function() {
	    	stemApi.searchSongs({
	            request: {
	                text: ""
	            },
	            success: function (response) {
	            	this.setState({ 
	            		songList: response.songs
	            	});

	                store.dispatch({
	                	type: 'UpdateSongList',
	                	data: response.songs
	                });

	            }.bind(this),
	            error: function (response) {
	                console.error(JSON.stringify(response, null, 2));
	            }
	        });
	    },

		showHideMenu: function() {
			if(this.state.displayMenu) {
				this.setState({ displayMenu: false });
			} else {
				this.setState({ displayMenu: true });
			}
		},

		showHideSearch: function() {
			if(this.state.displaySearch) {
				this.setState({ 
					displaySearch: false,
					filteredSongList: [],
					searchString: ''
				});
			} else {
				this.getSongList();
		        this.setState({ displaySearch: true });
			}
		},

		navigate: function(id) {
			store.dispatch({
				type: 'GoToPage',
				data: {currentPage: id}
			});
		},

		handleSearch: function(e) {
			var searchString = e.target.value;
        	this.setState({ searchString: e.target.value });	
		},

		selectSong: function(id, name) {
			var tagList = this.state.tagList,
				tag = {id: id, name: name};

			tagList.push(tag);
			store.dispatch({
				type: 'UpdateTagList',
				data: {tagList: tagList}
			});
		}, 

		render: function() {
			var self = this,
				songList = this.state.songList,
				filteredSongList = [],
            	searchString = this.state.searchString.trim().toLowerCase();

	        if (searchString.length > 0) {
	            filteredSongList = songList.filter(function(song) {
	                return song.name.toLowerCase().match( searchString );
	            });
	        }

			return (  
				<div>   
					<nav className="header">
						<div className="header-content">
							<div className="header-brand pull-left">         
								<a onClick={this.navigate.bind(this, 0)} className="brand">
									Thematic
								</a>
								<a href="http://d2pziso4zk2lvf.cloudfront.net/fontdemo.html"><i className="icon-star pad-l-sm"></i></a>
								<a href="http://d2pziso4zk2lvf.cloudfront.net/stylesheet.html"><i className="icon-rocket error"></i></a>
							</div>
							{ this.props.isLoggedIn ?  
								<div className="nav header-nav header-right pull-right">										
									<a onClick={this.showHideSearch}>
										{ this.state.displaySearch ? 
											<div className="search-input-wrapper dropdown">
												<span className="input-group-icon icon-search" id="addon-1"></span>
												<input id="search-input" onChange={this.handleSearch} aria-describedby="addon-1" placeholder="Placeholder..."  autoFocus={this.state.autofocus} ></input> 
												{ searchString.length > 0 ? 
													<span className="open">
									                    <ul className="dropdown-menu"> 
									                        { filteredSongList.map(function(item, index){
																return <SongListItem key={index} songID={item.id} songName={item.name} selectSong={self.selectSong} />;
									                        }) }
									                    </ul>
								                    </span>
							                    : null }
											</div>	
										: 
											<i className="icon-search"></i>
										}
									</a>

									<a><i className="icon-heart-empty"></i></a>
									<a><i className="icon-up-circle" onClick={this.navigate.bind(this, 1)}></i></a>
									<a><i className="icon-bell"></i></a>
									<a onClick={this.showHideMenu} className="dropdown-toggle primary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<i className="icon-menu"></i>
									</a>                 
								</div> 
							: null }
						</div> 
					</nav>

					<Menu displayMenu={this.state.displayMenu} showHideMenu={self.showHideMenu} alignment="right">
						<div className="menu-content">
							<MenuHeader showHideMenu={self.showHideMenu} />
							{ this.props.artistMenu.map(function(i) {
								return (
									<MenuItem showHideMenu={self.showHideMenu} hash={i.text} key={i.pageID} meunItemID={i.pageID}>
										<i className={i.icon}></i> {i.text}
									</MenuItem>
								)
							})}
						</div>
					</Menu>
					<div className={this.state.displaySearch ? "filter-page-overlay active" : null} onClick={this.showHideSearch}></div>
				</div>
			)
		}
	});

	var Menu = React.createClass({
		showHideMenu: function() {
	        this.props.showHideMenu();
		},

		render: function() {
			return (
				<div>
					<div onClick={this.showHideMenu} id="m-overlay" className={(this.props.displayMenu ? "menu-page-overlay active" : "menu-page-overlay")}></div>
					<div className="menu">
						<div className={(this.props.displayMenu ? "visible " : "") + this.props.alignment}>{this.props.children}</div>
					</div>
				</div>
			);
		}
	});

	var MenuHeader = React.createClass({
		showHideMenu: function() {
	        this.props.showHideMenu();
		},
		
		render: function() {
			return (
				<div className="menu-header">
					<a onClick={this.showHideMenu} className="close">
						<i className="icon-cancel"></i>
					</a>
					<div className="user-info">
						<span className="profile-img btn-circle drop-4">
							<img src={this.context.userInfo.profileImageUrl} />
						</span>
						<h2 className="pad-t-sm pad-b-sm">{this.context.userInfo.profileName}</h2>
						<a href={this.context.userInfo.customLink}>{this.context.userInfo.customLink}</a>
					</div>
				</div>
			);
		}
	});

	var MenuItem = React.createClass({
		navigate: function(id) {
	        this.props.showHideMenu();
			store.dispatch({
				type: 'GoToPage',
				data: {currentPage: id}
			});
		},

		render: function() {
			return (
				<div onClick={this.navigate.bind(this, this.props.meunItemID)} key={this.props.meunItemID} className={this.props.meunItemID == this.context.currentPage ? "menu-item active" : "menu-item"}>{this.props.children}</div>
			);
		}
	});

	var SongListItem = React.createClass({
		selectSong: function(id, name) {
	        this.props.selectSong(id, name);
		}, 

		render: function() {
			return (
				<li onClick={this.selectSong.bind(this, this.props.songID, this.props.songName)} key={this.props.songID}>
					{this.props.songName}
				</li>
			);
		}
	});

	MenuHeader.contextTypes = {
		userInfo: React.PropTypes.object
	};
	MenuItem.contextTypes = {
		currentPage: React.PropTypes.number
	};

	function mapStateToProps(state) {
		return {
			isLoggedIn: state.isLoggedIn,
			searchResults: state.songList,
			tagList: state.tagList
		};
	}

	function mapDispatchToProps(dispatch, ownProps) {
		return {
			
		};
	}

	return ReactRedux.connect(mapStateToProps, mapDispatchToProps)(NavBar);
})();