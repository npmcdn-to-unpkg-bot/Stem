var lastAutoCompleteId = 0;

var AutoCompleteTextBox = React.createClass({
	getInitialState: function() {
		return {
			id: 'autoComplete-' + lastAutoCompleteId++
		};
	},
	componentDidMount: function() {
		var options = this.props.options;

		$('#' + this.state.id).autocomplete({
			source: options
		});
	},

	// onChange: function(ev) {

	// },
	render: function() {
		return (
			<input id={this.state.id} onChange={this.props.onChange} type="text" />
		);
	}
});