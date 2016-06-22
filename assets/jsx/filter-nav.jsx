var FilterNav = React.createClass({
    showFilterMenu: function() {
        store.dispatch({
          type: 'ShowFilterMenu'
        });
    },

    hideFilterMenu: function() {
        store.dispatch({
          type: 'HideFilterMenu'
        });
    },
    
    render: function() {
        return (
            <div>
                <div className="filter-nav">
                    <ul className="filter-nav-list">
                        <div className="internal col-sm-6 col-md-6 col-lg-6 row-fluid artist-navBar-icon-width">
                            <li><a onClick={this.showFilterMenu}><span className="glyphicon navIcon glyphicon-headphones col-sm-3 col-md-3 col-lg-3 fa-2x"></span></a></li>
                            <li><a onClick={this.showFilterMenu}><span className="glyphicon navIcon glyphicon-heart col-sm-3 col-md-3 col-lg-3 fa-2x"></span></a></li>
                            <li><a onClick={this.showFilterMenu}><span className="artist-navBar-icons col-sm-3 col-md-3 col-lg-3 fa-4x">,</span></a></li>
                            <li><a onClick={this.showFilterMenu}><span className="artist-navBar-icons col-sm-3 col-md-3 col-lg-3 fa-4x">5</span></a></li>
                        </div>
                        <div className="internal col-sm-6 col-md-6 col-lg-6 row-fluid artist-navBar-icon-width">
                            <li><a onClick={this.showFilterMenu}><span className="artist-navBar-icons col-sm-3 col-md-3 col-lg-3 fa-4x">,</span></a></li>
                            <li><a onClick={this.showFilterMenu}><span className="glyphicon navIcon glyphicon-music col-sm-3 col-md-3 col-lg-3 fa-2x"></span></a></li>
                            <li><a onClick={this.showFilterMenu}><span className="artist-navBar-icons col-sm-3 col-md-3 col-lg-3 fa-4x">.</span></a></li>
                            <li><a onClick={this.showFilterMenu}><span className="glyphicon navIcon glyphicon-list-alt col-sm-3 col-md-3 col-lg-3 fa-2x"></span></a></li>
                        </div>
                    </ul>
                </div>
                <FilterMenu displayFilterMenu={this.props.displayFilterMenu}>
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
    hideFilterMenu: function() {
        store.dispatch({
          type: 'HideFilterMenu'
        });
    },

    render: function() {
        return (
            <div>
                <div onClick={this.hideFilterMenu} id="f-overlay" className={(this.props.displayFilterMenu ? "filter-page-overlay active" : "filter-page-overlay")}></div>
                <div className="filter-menu">
                    <div className={this.props.displayFilterMenu ? "visible " : ""}>{this.props.children}</div>
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