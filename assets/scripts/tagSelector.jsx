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

			this.props.onSelectionChange(res[0]);
		}.bind(this));
	},
	onChange: function(ev) {
		var id = ev.target.value;

		this.props.onSelectionChange(this.state.tagList.find(function(item) {
			return item.id === id;
		}));
	},
	render: function() {
		var selectStyles = {
			color: 'pink'
		};

		return (
			<div>
				<p>{this.state.tagName}</p>
				<select onChange={this.onChange} className="btn col-xs-12" style={selectStyles}>
					{this.state.tagList.map(function(item) {
						return (<option key={item.id} value={item.id}>{item.name}</option>);
					})}
				</select>
			</div>);
	}
});