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
				editing: -1,
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
		saveNew: function(){
			actions.addExpense({
				name: this.refs.name.getValue(),
				value: this.refs.value.getValue()
			});
			this.setState({
				addingNew: false
			});
		},
		handleClick: function(item){
			this.setState({
				editing: this.state.editing == -1 ? item.id : -1
			})
		},
		remove: function(item) {
			actions.deleteExpense(item);
		},
		save: function(item){
			var expense = {
				id: item.id,
				name: this.refs["name" + item.id].getValue(),
				value: this.refs["value" + item.id].getValue()
			};
			actions.editExpense(expense);
			this.handleClick(item);
		},
		render: function(){
			var self=this;
			var formNew = <div>
					<Input type="text" ref="name"/>
					<Input type="text" ref="value"/>
					<Button onClick={this.saveNew}>
						Save
					</Button>
				</div>
			var button = this.state.addingNew ? formNew : 
				<Button bsStyle="primary" onClick={this.createNew}>+</Button>;			
			var expenseList = this.state.expenseList.map(function(item){
				return <span key={item.id}> 
						{self.state.editing == item.id ? <div>	
						<i className="fa fa-times pointer" onClick={self.remove.bind(null, item)}></i>
						<Col xs={6} className="expense-item">
							<Input type="text" ref={"name" + item.id} defaultValue={item.name} onChange={this.changeName}/>
						</Col>
						<Col xs={6} className="expense-item">
							<Input type="text" ref={"value" + item.id} defaultValue={item.value} onChange={this.changeValue}/>
						</Col>
						<Button bsStyle="primary" onClick={self.save.bind(null, item)}>
							Save
						</Button>
					</div> : <div>
						<Col xs={6} className="expense-item">
							<p>{item.name}</p>
						</Col>
						<Col xs={6} className="expense-item">
							<p>{item.value}</p>
						</Col>
						<i className="fa fa-pencil-square-o pointer" onClick={self.handleClick.bind(null, item)}></i>
					</div>}
				</span>
			});
			return <div>
				{expenseList}
				{button}
			</div>
		}
	})
})