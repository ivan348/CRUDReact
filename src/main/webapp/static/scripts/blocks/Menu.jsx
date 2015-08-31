define(function(require){
	var React = require('react');
	var api = require('helpers/http');
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
		render: function() {
			return <div>
				<span onClick={this.handleClick}>Load</span>
				<ul>{this.state.items}</ul>
			</div>
		}
	})
})