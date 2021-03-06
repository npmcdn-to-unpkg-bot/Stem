var Header = (function() {
	var NavBar = React.createClass({
	    getInitialState: function () {
	        return {
	            displayMenu: false,
	            displaySearch: false,
				autofocus: true,
				searchInput: '',
	        };
	    },

	    search: function() {
	    	this.props.search(this.state.searchInput);
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
					searchInput: ''
				});
			} else {
		        this.setState({ displaySearch: true });
			}
		},

		navigate: function(id) {
			store.dispatch({
				type: 'GoToPage',
				data: { currentPage: id }
			});
		},

		searchInputChange: function( ev ) {
        	this.setState({ searchInput: ev.target.value });	
		},

		searchInputKeyPress: function( ev ) {
			if (ev.which === 13) {
				this.search();
			}
		},

		render: function() {
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
												<span onClick={this.search} className="input-group-icon icon-search" id="addon-1"></span>
												<input 
													id="search-input" 
													onChange={this.searchInputChange}
													value={this.state.searchInput}
													onKeyPress={this.searchInputKeyPress}
													aria-describedby="addon-1" 
													placeholder="Search..."  
													autoFocus={this.state.autofocus} ></input>
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

					<Menu displayMenu={this.state.displayMenu} showHideMenu={this.showHideMenu} alignment="right">
						<div className="menu-content">
							<MenuHeader showHideMenu={this.showHideMenu} />
							{ this.props.menu.map(function(item) {
								return (
									<MenuItem showHideMenu={this.showHideMenu} hash={item.text} key={item.pageID} meunItemID={item.pageID} level={item.level}>
										<i className={item.icon}></i> {item.text}
									</MenuItem>
								)
							}.bind(this))}
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
				data: { currentPage: id }
			});
		},

		render: function() {
			var itemClass = 'menu-item';
			if(this.props.meunItemID == this.context.currentPage) {
				itemClass += ' active'
			}
			if(this.props.level == 2) {
				itemClass += ' level-2'
			}
			return (
				<div onClick={this.navigate.bind(this, this.props.meunItemID)} key={this.props.meunItemID} className={itemClass}>{this.props.children}</div>
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
			isLoggedIn: state.userState.isLoggedIn,
			currentPage: state.appState.currentPage
		};
	}

	function mapDispatchToProps(dispatch, ownProps) {
		return {
			search: function(terms) {
				dispatch(beginSearch(terms));
			}
		};
	}

	return ReactRedux.connect(mapStateToProps, mapDispatchToProps)(NavBar);
})();