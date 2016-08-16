var LibraryMainTable = React.createClass({
	render: function() {
		return(
	  		<div className="library-result-table mar-t-lg">
	    		<table className="table no-borders">
	      			<LibraryMainTableHeader />
	      			<tbody>
	     			{/* Render the rows here */}
	      			</tbody>
	    		</table>
	  		</div>
		)
	}
});