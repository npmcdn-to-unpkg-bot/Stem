var ArtistSearchSideBar = ReactRedux.connect(function(state) {
		return {
			tagList: state.tagList
		};
	}, function(dispatch, ownProps) {
		return {
			removeTag: function(tag) {
				dispatch({
					type: 'UpdateTagList',
					data: this.props.tagList.filter(function(item) {
						return item !== tag;
					})
				});
			}
		};
	})(
	React.createClass({
		render: function() {
			var tagList = this.props.tagList;

			return (
				<span>
					{ tagList.length > 0 ? 
						<ul className="artist-search-tags-list col-xs-12">
	                        { tagList.map(function(item, index) {
								return (
									<li key={index} value={index}>
										<button onClick={this.props.removeTag.bind(this, item)} className="btn artist-search-tags">
											<h4>{ item } <span className="icon-cancel-circled"></span></h4>
										</button>
									</li>
								);
	                        }.bind(this)) }
	                    </ul>
	                : null }
				</span>  
			)
		}
}));