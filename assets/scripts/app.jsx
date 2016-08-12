var createStore = Redux.createStore;
var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;
var stemApi = new StemApi("http://52.32.255.104/api/");

const initialState = {
	baseAPI: 'http://52.32.255.104/api',
	isLoggedIn: false,
	authToken: '',
	userInfo: {},
	displayMenu: false,
	displayFilterMenu: false,
	currentPage: 0
};

var reducer = function(state, action) {
	if(state === undefined) {
		return initialState;
	}
	var newState = state;
	switch(action.type) {
		case 'UpdateLoginStatus':
			newState = Object.assign({}, state, {
				isLoggedIn: action.data.isLoggedIn, 
				authToken: action.data.authToken,
				userInfo: action.data.userInfo,
				currentPage: action.data.currentPage
			});
			console.log('newState = ' + JSON.stringify(newState));
			return newState;

		case 'UpdateUserRecord':
			newState = Object.assign({}, state, {
				userInfo: action.data.userInfo,
				currentPage: action.data.currentPage
			});
			console.log('newState = ' + JSON.stringify(newState));
			return newState;

		case 'ShowMenu':
			newState = Object.assign({}, state, {displayMenu: true});
			return newState;

		case 'HideMenu':
			newState = Object.assign({}, state, {displayMenu: false});
			return newState;

		case 'GoToPage':
			console.log('action.data = ' + JSON.stringify(action.data));
			newState = Object.assign({}, state, {currentPage: action.data.currentPage, displayMenu: false});
			console.log('newState = ' + JSON.stringify(newState));
			return newState;

		case 'ShowFilterMenu':
			newState = Object.assign({}, state, {displayFilterMenu: true});
			return newState;

		case 'HideFilterMenu':
			newState = Object.assign({}, state, {displayFilterMenu: false});
			return newState;

		default: 
			console.log('state = ' + JSON.stringify(state));
			return state;
	}
	return newState;
}

var store = createStore(reducer, initialState);

var AppState = function(state) {
	return {
		baseAPI: state.baseAPI,
		isLoggedIn: state.isLoggedIn,
		authToken: state.authToken,
		userInfo: state.userInfo,
		displayMenu: state.displayMenu,
		displayFilterMenu: state.displayFilterMenu,
		currentPage: state.currentPage
	}
}

var App = React.createClass({
	getInitialState: function() {
		return {
			searchVisible: false,
			autofocus: true
		}
	},
	getChildContext() {
		return {
			baseAPI: this.props.baseAPI,
			authToken: this.props.authToken,
			displayFilterMenu: this.props.displayFilterMenu,
			userInfo: this.props.userInfo
		};
	},

	showMenu: function() {
		store.dispatch({
			type: 'ShowMenu'
		});
	},

	navigate: function(id) {
		store.dispatch({
			type: 'GoToPage',
			data: {currentPage: id}
		});
	},
	expandSearch: function() {
		this.setState({searchVisible: true});
	},
	collapseSearch: function() {
		this.setState({searchVisible: false});
	},
	render: function() {
		var currentPage = this.props.currentPage;

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
								{ this.props.isLoggedIn ?  
										<div className="nav header-nav header-right pull-right">										
												<a onClick={this.expandSearch}>{this.state.searchVisible ? 
													<div className="search-input-wrapper">
														<span className="input-group-icon icon-search" id="addon-1"></span>
														<input id="search-input" aria-describedby="addon-1" placeholder="Placeholder..."  autoFocus={this.state.autofocus} ></input> 
													</div>	
													: <i className="icon-search"></i>}</a>

												<a><i className="icon-heart-empty"></i></a>
												<a><i className="icon-up-circle"></i></a>
												<a><i className="icon-bell"></i></a>
												<a onClick={this.showMenu} className="dropdown-toggle primary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
													<i className="icon-menu"></i>
												</a>                 
										</div> 
								: null }
						</div> 
				</nav>

				<Menu displayMenu={this.props.displayMenu} alignment="right">
					<div className="menu-content">
						<MenuHeader imgSrc={this.props.imgSrc} name={this.props.name} url={this.props.url} />
						{ this.props.artistMenu.map(function(i) {
								return <MenuItem hash={i.text} meunItemID={i.pageID} currentPage={currentPage}><i className={i.icon}></i> {i.text}</MenuItem>
						})}
					</div>
				</Menu>
				<div className={this.state.searchVisible ? "menu-page-overlay active" : null} onClick={this.collapseSearch}></div>
				<div className="wrapper">
					{ this.props.currentPage == 0 ?
						<div>
							{ this.props.isLoggedIn ? 
								<div>
									<LibraryMain />
									<Footer />
								</div>
							:
								<Login /> 
							}
						</div>
					: null}
					
					{ this.props.currentPage == 1 ?
						<div>
							<SubmitMusicMain />
							<Footer />
						</div>
					: null} 

					{ this.props.currentPage == 2 ?
						<div>
							<ArtistInternalAnalytics />
							<Footer />
						</div>
					: null} 
					
					{ this.props.currentPage == 3 ?
						<div>
							<ArtistProfile />
							<Footer />
						</div>
					: null} 

					{ this.props.currentPage == 4 ?
						<div>
							<FilterNav />
							<PlaylistMain />
							<Footer />
						</div>
					: null} 

					{ this.props.currentPage == 5 ?
						<div>
							<ArtistSettings />
							<Footer />
						</div>
					: null} 

					{ this.props.currentPage == 6 ?
						<div>
							<FilterNav />
							<ArtistSearch />
							<Footer />
						</div>
					: null}

					{ this.props.currentPage == 7 ?
						<div>
							<AdminMain />
						</div>
					: null} 

					{ this.props.currentPage == 8 ?
						<div>
							<FilterNav />
							<CreatorMain />
							<Footer />
						</div>
					: null} 

					{ this.props.currentPage == 100 ?
						<div>
							<WhoAreYou />
						</div>
					: null} 

					{ this.props.currentPage == 101 ?
						<div>
							<ArtistInternalAnalytics />
						</div>
					: null} 
					
					{ this.props.currentPage == 102 ?
						<div>
							<ArtistDownloadNotice />
						</div>
					: null}
				</div>
			</div>
		);
	}
});

var Menu = React.createClass({
	hideMenu: function() {
		store.dispatch({
			type: 'HideMenu'
		});
	},

	render: function() {
		return (
			<div>
				<div onClick={this.hideMenu} id="m-overlay" className={(this.props.displayMenu ? "menu-page-overlay active" : "menu-page-overlay")}></div>
				<div className="menu">
					<div className={(this.props.displayMenu ? "visible " : "") + this.props.alignment}>{this.props.children}</div>
				</div>
			</div>
		);
	}
});

var MenuHeader = React.createClass({
	hideMenu: function() {
		store.dispatch({
			type: 'HideMenu'
		});
	},
	
	render: function() {
		return (
			<div className="menu-header">
				<a onClick={this.hideMenu} className="close">
					<i className="icon-cancel"></i>
				</a>
				<div className="user-info">
					<span className="profile-img btn-circle drop-4">
						<img src={this.props.imgSrc} />
					</span>
					<h2 className="pad-t-sm pad-b-sm">{this.props.name}</h2>
					<a href={this.props.url}>stem.com/danbrauer</a>
				</div>
			</div>
		);
	}
});

var MenuItem = React.createClass({
	navigate: function(id) {
		store.dispatch({
			type: 'GoToPage',
			data: {currentPage: id, displayMenu: false}
		});
	},

	render: function() {
		return (
			<div onClick={this.navigate.bind(this, this.props.meunItemID)} id={this.props.meunItemID} className={this.props.meunItemID == this.props.currentPage ? "menu-item active" : "menu-item"}>{this.props.children}</div>
		);
	}
});

App.childContextTypes = {
	baseAPI: React.PropTypes.string,
	authToken: React.PropTypes.string,
	displayFilterMenu: React.PropTypes.bool,
	userInfo: React.PropTypes.object
};

var artistMenu = [
	{
		pageID: 0,
		text: "Home",
		icon: "icon-home"
	},
	{
		pageID: 1,
		text: "Submit Music",
		icon: "icon-up-circle"
	},
	{
		pageID: 2,
		text: "Dashboard",
		icon: "icon-gauge"
	},
	{
		pageID: 3,
		text: "Profile",
		icon: "icon-user"
	},
	{
		pageID: 4,
		text: "Browse Music",
		icon: "icon-headphones-2"
	},
	{
		pageID: 5,
		text: "Account Settings",
		icon: "icon-cog-2"
	},
	{
		pageID: 6,
		text: "Artist Search",
		icon: "icon-search"
	},
	{
		pageID: 7,
		text: "Admin Dashboard",
		icon: "icon-star"
	},
	{
		pageID: 8,
		text: "Creator Home",
		icon: "icon-home"
	}
]; 

App = connect(
	AppState
)(App)

ReactDOM.render(
	<div>
		<ReactRedux.Provider store={store}>
			<App artistMenu={artistMenu} name="Dan Brauer" url="http://www.lechedetigremusic.com/" imgSrc="http://static1.squarespace.com/static/550f767ae4b0299913bce721/55113382e4b07c8085049dce/55126bbde4b04b58e54d3d25/1427270590627/2014_LecheDeTigre_SD-2862.jpg?format=500w" />
		</ReactRedux.Provider>
	</div>,
	document.getElementById('app')
);