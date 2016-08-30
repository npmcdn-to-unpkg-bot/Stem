var createStore = Redux.createStore,
	applyMiddleware = Redux.applyMiddleware,
	Provider = ReactRedux.Provider,
	connect = ReactRedux.connect,
	stemApi = new StemApi("http://52.32.255.104/api/"),
	thunk = ReduxThunk.default;

const initialState = {
	baseAPI: 'http://52.32.255.104/api',
	isLoggedIn: false,
	userInfo: {},
	currentPage: 0,
	pageParams: {},
	searchTerms: '',
	searchResults: [],
	tagList: []
};

// Thunk Action Creator, for having actions that have side effects such as AJAX calls
function beginSearch(searchTerms) {
	return function(dispatch) {
		stemApi.searchSongs({
            request: {
                text: searchTerms
            }
        })
		.then(function(response) {
			dispatch({
            	type: 'UpdateSearch',
            	data: {
            		results: response.songs,
            		terms: response.terms.join(' '),
            		// We automatically navigate to the artist search page when a search is initiated
            		currentPage: 6
            	}
	        });
		}, function(error) {
			console.error(JSON.stringify(response, null, 2));
		});
	};
}

var reducer = function(state, action) {
	if (state === undefined) {
		return initialState;
	}
	var newState = state;
	switch (action.type) {
		case 'UpdateLoginStatus':
			newState = Object.assign({}, state, {
				isLoggedIn: action.data.isLoggedIn,
				userInfo: action.data.userInfo || {},
				currentPage: action.data.currentPage
			});
			console.log('newState = ' + JSON.stringify(newState));
			return newState;

		case 'UpdateUserRecord':
			// TODO:  Object.assign is not supported in IE, we may want to use lodash _.assign for compatibility
			newState = Object.assign({}, state, {
				userInfo: action.data.userInfo,
				currentPage: action.data.currentPage
			});
			console.log('newState = ' + JSON.stringify(newState));
			return newState;

		case 'GoToPage':
			console.log('GoToPage action.data = ' + JSON.stringify(action.data));
			newState = Object.assign({}, state, {
				currentPage: action.data.currentPage,
				pageParams: action.data.pageParams || {}
			});
			console.log('newState = ' + JSON.stringify(newState));
			return newState;

		case 'UpdateSearch':
			newState = Object.assign({}, state, { 
				searchResults: action.data.results,
				searchTerms: action.data.terms,
				currentPage: action.data.currentPage
			});
			return newState;

		default: 
			console.log('state = ' + JSON.stringify(state));
			return state;
	}
	return newState;
}

var store = createStore(reducer,
	initialState,
	applyMiddleware(thunk));

var AppState = function(state) {
	return {
		baseAPI: state.baseAPI,
		isLoggedIn: state.isLoggedIn,
		userInfo: state.userInfo,
		currentPage: state.currentPage,
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
			userInfo: this.props.userInfo,
			currentPage: this.props.currentPage
		};
	},

	render: function() {
		var currentPage = this.props.currentPage;
		
		return (  
			<div>  

				<Header artistMenu={this.props.artistMenu} currentPage={this.props.currentPage} />

				{ this.props.currentPage == 0 ?
					<div className="wrapper">
						{ this.props.isLoggedIn ? 
							<span>
								<LibraryMain />
								<Footer />
							</span>
						:
							<Login /> 
						}
					</div>
				: null}
				
				{ this.props.currentPage == 1 ?
					<div className="wrapper">
						<SubmitMusicMain />
						<Footer />
					</div>
				: null} 

				{ this.props.currentPage == 2 ?
					<div className="wrapper">
						<ArtistInternalAnalytics />
						<Footer />
					</div>
				: null} 
				
				{ this.props.currentPage == 3 ?
					<div className="wrapper">
						<ArtistProfile />
						<Footer />
					</div>
				: null} 

				{ this.props.currentPage == 4 ?
					<div className="wrapper">
						<FilterNav />
						<PlaylistMain />
						<Footer />
					</div>
				: null} 

				{ this.props.currentPage == 5 ?
					<div className="wrapper">
						<ArtistSettings />
						<Footer />
					</div>
				: null} 

				{ this.props.currentPage == 6 ?
					<div className="wrapper">
						<FilterNav />
						<ArtistSearch />
						<Footer />
					</div>
				: null}

				{ this.props.currentPage == 7 ?
					<div className="wrapper">
						<AdminMain />
						<Footer />
					</div>
				: null} 

				{ this.props.currentPage == 8 ?
					<div className="wrapper">
						<FilterNav />
						<CreatorMain />
						<Footer />
					</div>
				: null} 

				{ this.props.currentPage == 9 ?
					<div className="wrapper">
						<CreatorProfileMain />
						<Footer />
					</div>
				: null} 

				{ this.props.currentPage == 100 ?
					<div className="wrapper">
						<WhoAreYou />
					</div>
				: null} 

				{ this.props.currentPage == 101 ?
					<div className="wrapper">
						<ArtistInternalAnalytics />
					</div>
				: null} 
				
				{ this.props.currentPage == 102 ?
					<div className="wrapper">
						<ArtistDownloadNotice />
					</div>
				: null}

				{ this.props.currentPage == 103 ?
					<div className="wrapper">
						<ArtistEditTrack />
						<Footer />
					</div>
				: null}

				{ this.props.currentPage == 104 ?
					<div className="wrapper">
						<ArtistSongDetail />
						<Footer />
					</div>
				: null}

				{ this.props.currentPage == 105 ?
					<div className="wrapper">
						<AdminHeader />
						<AdminSubmitMusic />
						<Footer />
					</div>
				: null}

				{ this.props.currentPage === 110 ? 
					<div className="wrapper">
						<ArtistProfile artistId={this.props.pageParams.artistId} />
						<Footer />
					</div>
				: null}
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
	},
	{
		pageID: 9,
		text: "Creator Profile",
		icon: "icon-home"
	}
]; 

App.childContextTypes = {
	baseAPI: React.PropTypes.string,
	isLoggedIn: React.PropTypes.bool,
	userInfo: React.PropTypes.object,
	currentPage: React.PropTypes.number
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