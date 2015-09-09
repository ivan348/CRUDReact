define(function(require) {
	var React = require('react');
	var Reflux = require('reflux');
	var Summ = require('stores/Summ');
	var actions = require("actions/actions")
	var {Row, Col} = require('react-bootstrap');
	return React.createClass({
		mixin: [Reflux.connect(Summ, "result")],
		getInitialState: function() {
			return {
				result : {} 
			};
		},
		componentDidMount: function() {
			actions.getSumm();
			debugger
		},
		render: function() {
			return (
				<div >{JSON.stringify(this.state.result)}</div>
			);
		}
	
	})
})