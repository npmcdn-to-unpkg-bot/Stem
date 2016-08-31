var TagSelector = React.createClass({
	onChange: function(ev) {
		var id = ev.target.value;

		this.props.onSelectionChange(this.props.tagList.find(function(item) {
			return item.id === id;
		}));
	},
	render: function() {
		var selectStyles = {
			color: 'pink'
		};

		return (
			<div>
				<p>{ this.props.tag ? this.props.tag.name : null }</p>
				<select onChange={this.onChange} className="btn col-xs-12" style={selectStyles}>
					{this.props.tagList.map(function(item) {
						return (<option key={item.id} value={item.id}>{item.name}</option>);
					})}
				</select>
			</div>);
	}
});