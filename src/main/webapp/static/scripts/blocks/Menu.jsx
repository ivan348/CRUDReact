define(function(require){
	var React = require('react');
	var api = require('helpers/http');
	var Expenses = require("stores/Expenses");
	var list = api.data.map(function(item){
		return <li>{item}</li>
	})
	return React.createClass({
		getInitialState: function() {
			return {items: []}
		},
		handleClick: function(){
			this.setState({items: list})
		},
		val: "",
		render: function() {
			var val;		
			Expenses.listen(function(val) {
				this.val = val;	
			})
			return <div>
				<span onClick={this.handleClick}>Load</span>
				<p>{this.val}</p>
				<ul>{this.state.items}</ul>
			</div>
		}
	})
})