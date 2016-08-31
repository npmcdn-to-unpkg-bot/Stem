var TagSelector = React.createClass({
	getInitialState: function() {
		return {
			selectedValue: null,
			selectedValues: []
		};
	},
	componentWillReceiveProps: function(nextProps) {
		if (nextProps.tagList.length > 0) {
			this.setState({
				selectedValue: nextProps.tagList[0]
			});
		}
	},
	onChange: function(ev) {
		var id = ev.target.value;

		this.setState({
			selectedValue: this.props.tagList.find(function(item) {
				return item.id == id;
			})
		});
	},
	add: function() {
		var selectedValues = this.state.selectedValues;

		if (selectedValues.indexOf(this.state.selectedValue) === -1) {
			newState = [].concat(selectedValues, this.state.selectedValue);

			this.setState({
				selectedValues: newState
			});
		}
	},
	render: function() {
		var selectStyles = {
			color: 'pink'
		};

		var tagName = this.props.tag ? this.props.tag.name : null;

		return (
			<div>
				<p>{ tagName }</p>
				<ul>
					{ this.state.selectedValues.map(function(item) {
						return (<li key={ item.id }>{ item.name }</li>);
					})}
				</ul>
				
				<select onChange={ this.onChange } className="btn col-xs-12" style={ selectStyles }>
					{ this.props.tagList.map(function(item) {
						return (<option key={ item.id } value={ item.id }>{ item.name }</option>);
					})}
				</select>

				<a onClick={ this.add }><i className="icon-plus-circled fa-2x"></i>Add { tagName }</a>
			</div>
		);
	}
});