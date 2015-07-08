define(function(require){
	var React = require('react');
	var items = ["item1", "item2", "item3"];
	var list = items.map(function(item){
		return <li>{item}</li>
	})
	return React.createClass({
		render: function(){
			return <ul>{list}</ul>
		}
	})
})