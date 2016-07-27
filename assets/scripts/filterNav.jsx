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
                            <li><a onClick={this.showFilterMenu}><i className="icon-soundcloud"></i></a></li>
                            <li><a onClick={this.showFilterMenu}><i className="icon-heart"></i></a></li>
                            <li><a onClick={this.showFilterMenu}><i className="icon-flow-branch"></i></a></li>
                            <li><a onClick={this.showFilterMenu}><i className="icon-user-pair"></i></a></li>
                        </div>
                        <div className="internal col-sm-6 col-md-6 col-lg-6 row-fluid artist-navBar-icon-width">
                            <li><a onClick={this.showFilterMenu}><i className="icon-note"></i></a></li>
                            <li><a onClick={this.showFilterMenu}><i className="icon-users"></i></a></li>
                            <li><a onClick={this.showFilterMenu}><i className="icon-user"></i></a></li>
                            <li><a onClick={this.showFilterMenu}><i className="icon-list"></i></a></li>
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