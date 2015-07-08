define(function(require){
	var React = require('react');
	return React.createClass({
		handleClick: function(){
			console.log(111)
		},
		render: function(){
			return <p onClick={this.handleClick}>text</p>
		}
	})
})