var Header = React.createClass({
    getInitialState: function () {
        return {
			currentPage: this.props.currentPage,
            displayMenu: false,
            displaySearch: false,
			autofocus: true,
			songList: undefined
        }
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
		console.log('>>> search term = ' + searchTerm);
		if(searchTerm) {
	        stemApi.searchSongs({
	            request: {
	                text: searchTerm
	            },
	            success: function (response) {
	                console.log(JSON.stringify(response, null, 2));
	            },
	            error: function (response) {
	                console.error(JSON.stringify(response, null, 2));
	            }
	        });
	    }
	},

	render: function() {
		var self = this;

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
										<div className="search-input-wrapper">
											<span className="input-group-icon icon-search" id="addon-1"></span>
											<input id="search-input" onChange={this.handleSearch} aria-describedby="addon-1" placeholder="Placeholder..."  autoFocus={this.state.autofocus} ></input> 
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
							return <MenuItem showHideMenu={self.showHideMenu} hash={i.text} meunItemID={i.pageID} currentPage={self.state.currentPage}><i className={i.icon}></i> {i.text}</MenuItem>
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
			<div onClick={this.navigate.bind(this, this.props.meunItemID)} id={this.props.meunItemID} className={this.props.meunItemID == this.props.currentPage ? "menu-item active" : "menu-item"}>{this.props.children}</div>
		);
	}
});

Header.contextTypes = {
    isLoggedIn: React.PropTypes.bool
};
MenuHeader.contextTypes = {
	userInfo: React.PropTypes.object
};