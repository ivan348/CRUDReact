define(function(require){
	var React = require('react');
	var apiCall = require('helpers/http');
	var Input = require("react-bootstrap").Input;
	return React.createClass({
		handleChange: function(){
			console.log(this.refs.title.getValue());
		},
		render: function(){
			return <Input ref="title" type="text" onChange={this.handleChange}/>
		}
	})
})