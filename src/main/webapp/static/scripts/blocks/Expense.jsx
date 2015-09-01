define(function(require){
	var React = require('react');
	var {Col, Button} = require('react-bootstrap');
	return React.createClass({
		getInitialState: function(){
			return {
				val: ""
			}
		},
		render: function(){
			return <Col xs={12}>Expense</Col>
		}
	})
})