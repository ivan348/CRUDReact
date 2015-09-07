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
				addingNew: false
			}
		},
		createNew: function(){
			this.setState({
				addingNew: true
			})
		},
		componentDidMount: function(){
			actions.getExpenses();
		},
		save: function(){
			actions.addExpense({
				name: this.refs.name.getValue(),
				value: this.refs.value.getValue()
			});
			this.setState({
				addingNew: false
			});
		},
		render: function(){
			var expenseList = this.state.expenseList.map(function(item){
				return <Expense key={item.id} name={item.name} value={item.value} id={item.id}/>
			});
			var form = <div>
					<Input type="text" ref="name" onChange={this.changeName}/>
					<Input type="text" ref="value" onChange={this.changeValue}/>
					<Button onClick={this.save}>
						Save
					</Button>
				</div>
			var button = this.state.addingNew ? form : 
				<Button bsStyle="primary" onClick={this.createNew}>+</Button>;
			return <div>
				{expenseList}
				{button}
			</div>
		}
	})
})