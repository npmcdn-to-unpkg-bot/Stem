var createStore = Redux.createStore;
var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;

const initialState = {
	isLoggedIn: false,
	navItems: ['Home', 'Creator Profile', 'Artist Profile', 'Song List', 'Profile Settings', 'Logout']
};

var reducer = function(state, action) {
  if(state === undefined) {
    return initialState;
  }
  var newState = state;
  switch(action.type) {
	case 'SIGNIN':
		console.log('SIGNIN');
		state.isLoggedIn = true;
		console.log('state = ' + JSON.stringify(state));
		//mapStateToProps();
		return state;

	case 'SIGNOUT':
		console.log('SIGNOUT');
		state.isLoggedIn = false;
		console.log('state = ' + JSON.stringify(state));
		return state;

	default: 
		console.log('state = ' + JSON.stringify(state));
		return state;
  }
  return newState;
}

var store = createStore(reducer, initialState);

var App = React.createClass({
	render: function() {
		return (
			<div>				
				<nav className="navbar member">
					<div className="navbar-header pull-left">         
						<a className="brand">
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
							{ this.props.navItems.map(function(i, index) {
								if(index > 0) {
									return <li><a>{i}</a></li>;
								}
							})}    
						</ul>					
					</div>	
				</nav>

                <Menu ref="menu" alignment="right">
                    <div className="menu-content">
                        <MenuHeader imgSrc={this.props.imgSrc} name={this.props.name} url={this.props.url} />
                        <MenuItem hash="first-page" active="true">First Page</MenuItem>
                        <MenuItem hash="second-page">Second Page</MenuItem>
                        <MenuItem hash="third-page">Third Page</MenuItem>
                    </div>
                </Menu>

				<h1>test</h1>
				{this.props.isLoggedIn ? "hello world" : "goodbye world"}
			</div>
		);
	}
});

var AppState = function(state) {
  return {
		isLoggedIn: state.isLoggedIn,
		navItems: state.navItems
	}
}

var AppDispatch = function(dispatch) {
  return {
    testLogin: function() {
    	console.log('testLogin called')
    }
  }
}

var Menu = React.createClass({
    getInitialState: function() {
        return {
            visible: false  
        };
    },

    show: function() {
        this.setState({ visible: true });
        document.getElementById("overlay").addEventListener("click", this.hide);
    },

    hide: function() {
        document.removeEventListener("click", this.hide);
        this.setState({ visible: false });
    },

    render: function() {
        return (
            <div>
                <div id="overlay" className={(this.state.visible ? "page-overlay active" : "page-overlay")}></div>
                <div className="menu">
                    <div className={(this.state.visible ? "visible " : "") + this.props.alignment}>{this.props.children}</div>
                </div>
            </div>
        );
    }
});

var MenuHeader = React.createClass({
    render: function() {
        return (
            <div className="menu-header">
                <a className="close">X</a>
                <div className="user-info">
                    <img src={this.props.imgSrc} />
                    <h2>{this.props.name}</h2>
                    <a href={this.props.url}>stem.com/smelly</a>
                </div>
            </div>
        );
    }
});

var MenuItem = React.createClass({
    navigate: function(hash) {
        window.location.hash = hash;
    },

    render: function() {
        return (
            <div className={this.props.active ? "menu-item active" : "menu-item"} onClick={this.navigate.bind(this, this.props.hash)}>{this.props.children}</div>
        );
    }
});


var FilterNav = React.createClass({
    getInitialState: function() {
        return {
            filterWidth: 0,
            filterUlWidth: 0
        }
    },
    
    componentDidMount: function() {
        return {
            windowWidth: window.innerWidth,
            filterCount: $('.filter-nav ul li').length,
            filterWidth: $('.filter-nav ul li').width(),
            filterUlWidth: this.state.filterCount * this.state.filterWidth
        };
    },
    
    moveLeft: function() {
        $('.filter-nav ul').animate({
            left: + this.state.filterWidth
        }, 200, function () {
            $('.filter-nav ul li:last-child').prependTo('.filter-nav ul');
            $('.filter-nav ul').css('left', '');
        });
    },

    moveRight: function() {
        $('.filter-nav ul').animate({
            left: - this.state.filterWidth
        }, 200, function () {
            $('.filter-nav ul li:first-child').appendTo('.filter-nav ul');
            $('.filter-nav ul').css('left', '');
        });
    },
        
    showFilterMenu: function() {
        this.refs.filterMenu.show();
    },
    
    hideFilterMenu: function() {
        this.refs.filterMenu.hide();
    },
    
    render: function() {
        return (
            <div>
                <div className="filter-nav" style={this.state.slideWidth > 0 ? {width: this.state.filterWidth + 'px'} : null}>
                    <a onClick={this.moveRight} className="control_next">&gt;</a>
                    <a onClick={this.moveLeft} className="control_prev">&lt;</a>
                    <ul style={this.state.filterUlWidth > 0 ? {width: this.state.filterUlWidth, marginLeft: -this.state.filterWidth} : null}>
                        <li onClick={this.showFilterMenu} className="filter-link">a</li>
                        <li onClick={this.showFilterMenu} className="filter-link">b</li>
                        <li onClick={this.showFilterMenu} className="filter-link">c</li>
                        <li onClick={this.showFilterMenu} className="filter-link">d</li>
                        <li onClick={this.showFilterMenu} className="filter-link">e</li>
                        <li onClick={this.showFilterMenu} className="filter-link">f</li>
                        <li onClick={this.showFilterMenu} className="filter-link">a</li>
                        <li onClick={this.showFilterMenu} className="filter-link">b</li>
                        <li onClick={this.showFilterMenu} className="filter-link">c</li>
                        <li onClick={this.showFilterMenu} className="filter-link">d</li>
                        <li onClick={this.showFilterMenu} className="filter-link">e</li>
                        <li onClick={this.showFilterMenu} className="filter-link">f</li>
                    </ul>
                </div>
                <FilterMenu ref="filterMenu">
                    <div className="filter-menu-content">
                        <div className="filter-menu-header">
                            Select Genres 
                        </div>
                        <FilterItem filterId="1">Filter One</FilterItem>
                        <FilterItem filterId="2">Filter Two</FilterItem>
                        <FilterItem filterId="3">Filter Three</FilterItem>
                        <FilterItem filterId="4">Filter Four</FilterItem>
                    </div>
                    <div className="filter-menu-footer">
                        <a onClick={this.hideFilterMenu}>Apply Filters</a>
                    </div>
                </FilterMenu>
            </div>
        );
    }

});

var FilterMenu = React.createClass({
    getInitialState: function() {
        return {
            visible: false  
        };
    },

    show: function() {
        this.setState({ visible: true });
        document.getElementById("overlay2").addEventListener("click", this.hide);
    },

    hide: function() {
        document.removeEventListener("click", this.hide);
        this.setState({ visible: false });
    },

    render: function() {
        return (
            <div>
                <div id="overlay2" className={(this.state.visible ? "page-overlay active" : "page-overlay")}></div>
                <div className="filter-menu">
                    <div className={this.state.visible ? "visible " : ""}>{this.props.children}</div>
                </div>
            </div>
        );
    }
});

var FilterItem = React.createClass({
    toggleFilter: function(filterId) {
        
    },

    render: function() {
        return (
            <div className={this.props.active ? "filter-item active" : "filter-item"} onClick={this.toggleFilter.bind(this, this.props.filterId)}>{this.props.children}</div>
        );
    }
});


App = connect(
  AppState
//  AppDispatch
)(App)

ReactDOM.render(
	<div>
		<ReactRedux.Provider store={store}>
			<App />
		</ReactRedux.Provider>
	</div>,
	document.getElementById('app')
);