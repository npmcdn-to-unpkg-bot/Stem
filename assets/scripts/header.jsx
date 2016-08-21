var Header = React.createClass({
    getInitialState: function () {
        return {
			currentPage: this.props.currentPage,
            displayMenu: false,
            displaySearch: false,
			autofocus: true,
			songList: []
        }
    },

	showHideMenu: function() {
		if(this.state.displayMenu) {
			this.setState({ 
				displayMenu: false, 
				songList: []
			});
		} else {
			this.setState({ displayMenu: true });
		}
	},

	showHideSearch: function() {
		if(this.state.displaySearch) {
			this.setState({ displaySearch: false });
		} else {
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
		var searchTerm = e.target.value;

		if(searchTerm) {
	        stemApi.searchSongs({
	            request: {
	                text: searchTerm
	            },
	            success: function (response) {
	            	this.setState({ songList: response.songs});

	                store.dispatch({
	                	type: 'SearchSongs',
	                	data: response.songs
	                });

	            }.bind(this),
	            error: function (response) {
	                console.error(JSON.stringify(response, null, 2));
	            }
	        });
	    }	
	},

	render: function() {
		var self = this,
			songList = this.state.songList;

		return (  
			<div>   
				<nav className="header">
					<div className="header-content">
						<div className="header-brand pull-left">         
							<a onClick={this.navigate.bind(this, 0)} className="brand">
								Stem
							</a>
							<a href="http://d2pziso4zk2lvf.cloudfront.net/fontdemo.html"><i className="icon-star pad-l-sm"></i></a>
							<a href="http://d2pziso4zk2lvf.cloudfront.net/stylesheet.html"><i className="icon-rocket error"></i></a>
						</div>
						{ this.context.isLoggedIn ?  
							<div className="nav header-nav header-right pull-right">										
								<a onClick={this.showHideSearch}>
									{ this.state.displaySearch ? 
										<div className="search-input-wrapper dropdown">
											<span className="input-group-icon icon-search" id="addon-1"></span>
											<input id="search-input" onChange={this.handleSearch} aria-describedby="addon-1" placeholder="Placeholder..."  autoFocus={this.state.autofocus} ></input> 
											{songList.length > 0 ? 
												<span className="open">
								                    <ul className="dropdown-menu"> 
								                        { songList.map(function(item, index){
															return <SongListItem key={index} songID={item.id} songName={item.songName} />;
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
		var tagList = this.context.tagList,
			tag = {id: id, name: name};

		tagList.push(tag);
		store.dispatch({
			type: 'UpdateTagList',
			data: {tagList: tagList}
		});
	}, 

	render: function() {
		return (
			<li onClick={this.selectSong.bind(this, this.props.songID, this.props.songName)} key={this.props.songID}>
				{this.props.songName}
			</li>
		);
	}
});

Header.contextTypes = {
    isLoggedIn: React.PropTypes.bool,
    tagList: React.PropTypes.array
};
MenuHeader.contextTypes = {
	userInfo: React.PropTypes.object
};
MenuItem.contextTypes = {
	currentPage: React.PropTypes.number
};
SongListItem.contextTypes = {
	tagList: React.PropTypes.array
};