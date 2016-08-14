var createStore = Redux.createStore;
var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;
var stemApi = new StemApi("http://52.32.255.104/api/");

const initialState = {
	baseAPI: 'http://52.32.255.104/api',
	isLoggedIn: false,
	userInfo: {},
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

		case 'GoToPage':
			console.log('action.data = ' + JSON.stringify(action.data));
			newState = Object.assign({}, state, {currentPage: action.data.currentPage, displayMenu: false});
			console.log('newState = ' + JSON.stringify(newState));
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
		userInfo: state.userInfo,
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
			isLoggedIn: this.props.isLoggedIn,
			userInfo: this.props.userInfo
		};
	},

	render: function() {
		var currentPage = this.props.currentPage;

		return (  
			<div>  

				<Header artistMenu={this.props.artistMenu} currentPage={this.props.currentPage} />

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
							{/* TODO: Pass the id of the artist here */}
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

App.childContextTypes = {
	baseAPI: React.PropTypes.string,
	isLoggedIn: React.PropTypes.bool,
	userInfo: React.PropTypes.object
};

App = connect(
	AppState
)(App)

ReactDOM.render(
	<div>
		<ReactRedux.Provider store={store}>
			<App artistMenu={artistMenu} />
		</ReactRedux.Provider>
	</div>,
	document.getElementById('app')
);