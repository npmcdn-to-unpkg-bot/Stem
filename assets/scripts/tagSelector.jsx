var TagSelector = React.createClass({
	getInitialState: function() {
		return {
			tagName: '',
			tagList: []
		};
	},
	componentDidMount: function() {
		stemApi.getTagValues({
			tagTypeId: this.props.tagTypeId
		}).then(function(res) {
			this.setState({
				tagName: res[0].typeName,
				tagList: res
			});
		}.bind(this));
	},
	render: function() {
		return (
			<div>
				<p>{this.state.tagName}</p>
				<select className="btn col-xs-12">
					{this.state.tagList.map(function(item) {
						return (<option>{item.name}</option>);
					})}
				</select>
			</div>);
	}
});