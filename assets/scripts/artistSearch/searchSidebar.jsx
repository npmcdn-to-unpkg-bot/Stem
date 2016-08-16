var ArtistSearchSideBar = React.createClass({

	removeTag: function(tag) {
		var tagList = this.context.tagList;
		console.log(tag);
	}, 

	render: function() {
		var self = this,
			tagList = this.context.tagList;

		return (
			<span>
				{tagList.length > 0 ? 
					<ul className="artist-search-tags-list col-xs-12">
                        { tagList.map(function(i){
							return (
								<li key={i.id} value={i.id}>
									<button onClick={self.removeTag.bind(self, i)} className="btn artist-search-tags">
										<h4>{i.name}  <span className="icon-cancel-circled"></span></h4>
									</button>
								</li>
							)
                        }) }
                    </ul>
                : null }
				<ArtistSearchMobileView />
			</span>  
		)
	}
});

ArtistSearchSideBar.contextTypes = {
    tagList: React.PropTypes.array
};