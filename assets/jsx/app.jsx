var App = React.createClass({
    getInitialState: function() {
        return { 
			focused: 0,
			items: ['Home', 'Login', 'Musicians', 'Creators', 'Blog', 'Contact', 'Creator Profile', 'Artist Profile', 'Song List', 'Profile Settings', 'Artist Search', 'Artist Internal', 'Logout'],
			displayLoginPage: false
		};
    },
	
	componentDidMount: function() {
		sessionStorage.setItem('userId',1);
		// TO DO: remove this! Hard coding this temporarily for testing purposes.
	},
	
	setBackground: function() {
		console.log('userId = ' + sessionStorage.getItem('userId'));
		if(sessionStorage.getItem('userId') == null) {
			$('body').addClass('landing-bg');
		} else {
			$('body').removeClass('landing-bg');
		}
	},
	
    navClicked: function(index) {
	    $('.btn-navbar').click();
	    $('.navbar-toggle').click();
		
		if(index == 1) {
			this.setState({displayLoginPage: true});
		} else {
			this.setState({displayLoginPage: false});
		}
		if(index == 12) {
			sessionStorage.clear();
		}
		this.setBackground();
        this.setState({focused: index});
    },
	
    render: function() {
        var self = this;
		
		return (
			<div>
				{ sessionStorage.getItem('userId') != null ?
					<nav className="navbar member">
						<div className="navbar-header pull-left">         
							<a className="brand" onClick={self.navClicked.bind(self,0)}>
								Stem
							</a>
						</div>	
						<div className="nav navbar-nav navbar-right pull-right">
							<a className="glyphicon glyphicon-search"></a>
							<a className="glyphicon glyphicon-th-list"></a>
							<a className="glyphicon glyphicon-bell"></a>
							<a className="dropdown-toggle primary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<span className="glyphicon glyphicon-menu-hamburger"></span>
							</a>
							<ul className="dropdown-menu">
								{ this.state.items.map(function(i, index) {
			        				if(index > 5) {
										return <li onClick={self.navClicked.bind(self, index)}><a>{i}</a></li>;
									}
								})}    
							</ul>					
						</div>
					</nav>
				:
					<nav className="navbar landing">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed primary" data-toggle="collapse" data-target="#navigation-index" aria-expanded="false">
								<span className="sr-only">Toggle navigation</span>
	      						<span className="glyphicon glyphicon-menu-hamburger"></span>
							</button>     
							<a className="brand" onClick={self.navClicked.bind(self,0)}>
								Stem
							</a>
						</div>	
						<div className="collapse navbar-collapse" id="navigation-index">
							<ul className="nav navbar-nav navbar-right">
								{ this.state.items.map(function(i, index) {
			        				if(index > 1 && index <= 5) {
										return <li onClick={self.navClicked.bind(self, index)}><a>{i}</a></li>;
									}
								})}    
								<li onClick={self.navClicked.bind(self, 1)}><a className="login">Login / Signup</a></li>
							</ul>
						</div>
					</nav>
				}
				<div className={this.state.displayLoginPage ? "display-true" : "display-false"}>
					<div id="r-login"></div>
				</div>
				  
				<div className="wrapper">
					{ this.state.focused == 0 ?
						<h1>
							Hello { sessionStorage.getItem('userFirstName') }
						</h1>
					: null}
					
					{ this.state.focused == 2 ?
						<div>
							<Musicians />
						</div>
					: null}	
					
					{ this.state.focused == 3 ?
						<div>
							<Creators />
						</div>
					: null}	
					
					{ this.state.focused == 4 ?
						<div>
							<Blog />
						</div>
					: null}	
				
					{ this.state.focused == 5 ?
						<div>
							<Contact />
						</div>
					: null}	
					
					{ this.state.focused == 6 ?
						<div>
							<CreatorProfile />
						</div>
					: null}	
					
					{ this.state.focused == 7 ?
						<div>
							<ArtistProfile />
						</div>
					: null}	
					
					{ this.state.focused == 8 ?
						<div>
							<SongList />
						</div>
					: null}	
					
					{ this.state.focused == 9 ?
						<div>
							<ProfileSettings />
						</div>
					: null}

					{ this.state.focused == 10 ?
						<div>
							<ArtistSearch />
						</div>
					: null}

					{ this.state.focused == 11 ?
						<div>
							<ArtistInternal />
						</div>
					: null}
				</div>
			</div>
		);
	}
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
