
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
        document.getElementById("f-overlay").addEventListener("click", this.hide);
    },

    hide: function() {
        document.removeEventListener("click", this.hide);
        this.setState({ visible: false });
    },

    render: function() {
        return (
            <div>
                <div id="f-overlay" className={(this.state.visible ? "filter-page-overlay active" : "filter-page-overlay")}></div>
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