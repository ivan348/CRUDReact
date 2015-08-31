define(function(require){
	var React = require("react");
	var Reflux = require("reflux")
	var apiCall = require("helpers/http");
	var rb = require("react-bootstrap");
	var Input = rb.Input;
	var Button = rb.Button;
	var Expenses = require("stores/Expenses");
	var actions = require("actions/actions");
	return React.createClass({
		mixins: [ 
			React.addons.LinkedStateMixin,
			Reflux.connect(Expenses)
		],
		handleChange: function(){
			console.log(this.refs.title.getValue());
		},
		handleClick: function(){
			actions.addExpense(this.refs.title.getValue());
		},
		render: function(){
			return <div>
				<Input ref="title" type="text" onChange={this.handleChange}/>
				<Button onClick={this.handleClick}/>
				</div>
		}
	})
})