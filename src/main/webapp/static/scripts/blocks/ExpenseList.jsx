define(function(require){
	var React = require("react");
	var Reflux = require("reflux");
	var {Input, Button, Col} = require("react-bootstrap");
	var actions = require("actions/actions");
	var ExpenseStore = require("stores/Expenses");
	var Expense = require("jsx!blocks/Expense");
	return React.createClass({
		mixins: [
			Reflux.connect(ExpenseStore, "expenseList")
		],
		getInitialState: function(){
			return {
				expenseList: [],
				editing: false
			}
		},
		handleClick: function(){

		},
		componentDidMount: function(){
			actions.getExpenses();
		},
		render: function(){
			var that = this;
			var expenseList = this.state.expenseList.map(function(item){
				return <Expense name={item.name}/>
			})
			return <div>{expenseList}</div>
		}
	})
})