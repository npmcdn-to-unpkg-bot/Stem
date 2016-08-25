var lastAutoCompleteId = 0;

var AutoCompleteTextBox = React.createClass({
	getInitialState: function() {
		return {
			id: 'autoComplete-' + lastAutoCompleteId++
		};
	},
	componentDidMount: function() {
		var options = this.props.options,
			id = this.getId();

		if (typeof options === 'array') {
			$('#' + id).autocomplete({
				source: options
			});

			return;
		}

		if (typeof options === 'function') {
			options(function(response) {
				$('#' + id).autocomplete({
					source: response,
					change: this.props.onChange
				});
			}.bind(this));
		}
	},

	getId: function() {
		return this.props.id ? this.props.id : this.state.id;
	},

	render: function() {
		return (
			<input id={this.getId()} type="text" />
		);
	}
});