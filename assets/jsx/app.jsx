var App = React.createClass({
    getInitialState: function() {
        return { 
			focused: 0,
			items: ['Home', 'Musicians', 'Creators', 'Blog', 'Contact'],
			displayLoginPage: false
		};
    },
	
    navClicked: function(index) {
	    $('.btn-navbar').click();
	    $('.navbar-toggle').click();
		
		if(index == 5) {
			this.setState({displayLoginPage: true});
		} else {
			this.setState({displayLoginPage: false});
		}
        this.setState({focused: index});
    },
	
    render: function() {
        var self = this;
		
		return (
			<div>
				{ sessionStorage.getItem('userId') != null ?
					<nav className="navbar member">
						<div className="navbar-header">         
							<a className="brand" onClick={self.navClicked.bind(self,0)}>
								Stem
							</a>
						</div>	
						<div className="nav navbar-nav navbar-right">
							<a className="glyphicon glyphicon-search"></a>
							<a className="glyphicon glyphicon-th-list"></a>
							<a className="glyphicon glyphicon-bell"></a>
							<a onClick={self.navClicked.bind(self, 5)} className="glyphicon glyphicon-menu-hamburger primary"></a>
						</div>
					</nav>
				:
					<nav className="navbar landing">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation-index" aria-expanded="false">
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
			        				if(index != 0) {
										return <li onClick={self.navClicked.bind(self, index)}><a>{i}</a></li>;
									}
								})}    
								<li onClick={self.navClicked.bind(self, 5)}><a className="login">Login / Signup</a></li>
							</ul>
						</div>
					</nav>
				}
				<div className={this.state.displayLoginPage ? "display-true" : "display-false"}>
					<div id="r-login"></div>
				</div>
				  
				<div className="container">
					{ this.state.focused == 0 ?
						<h1>
							Hello { sessionStorage.getItem('userFirstName') }
						</h1>
					: null}
					
					{ this.state.focused == 1 ?
						<div>
							<Musicians />
						</div>
					: null}	
					
					{ this.state.focused == 2 ?
						<div>
							<Creators />
						</div>
					: null}	
					
					{ this.state.focused == 3 ?
						<div>
							<Blog />
						</div>
					: null}	
				
					{ this.state.focused == 4 ?
						<div>
							<Contact />
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
