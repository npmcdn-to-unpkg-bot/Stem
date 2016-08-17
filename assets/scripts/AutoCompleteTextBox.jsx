var lastAutoCompleteId = 0;

var AutoCompleteTextBox = React.createClass({
	getInitialState: function() {
		return {
			id: 'autoComplete-' + lastAutoCompleteId++
		};
	},
	componentDidMount: function() {
		var options = this.props.options;

		$('#' + this.getId()).autocomplete({
			source: options
		});
	},

	getId: function() {
		return this.props.id ? this.props.id : this.state.id;
	},

	render: function() {
		return (
			<input id={this.getId()} onChange={this.props.onChange} type="text" />
		);
	}
});