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
				editing: item.id
			})
		},
		remove: function() {
			actions.deleteExpense(this.state.expense);
		},
		save: function(){
			actions.editExpense(this.state.expense);
			this.handleClick();
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
				return this.state.editing == item.id ? <div>	
					<i className="fa fa-times pointer" onClick={self.remove}></i>
					<Col xs={6} className="expense-item">
						<Input type="text" ref="name" value={item.name} onChange={this.changeName}/>
					</Col>
					<Col xs={6} className="expense-item">
						<Input type="text" ref="value" value={item.value} onChange={this.changeValue}/>
					</Col>
					<Button bsStyle="primary" onClick={this.save.bind(null, image)self.save}>
						Save
					</Button>
				</div> : <div>
					<Col xs={6} className="expense-item">
						<p>{item.name}</p>
					</Col>
					<Col xs={6} className="expense-item">
						<p>{item.value}</p>
					</Col>
					<i className="fa fa-pencil-square-o pointer" onClick={self.handleClick}></i>
				</div>
			});
			return <div>
				{expenseList}
				{button}
			</div>
		}
	})
})

		getInitialState: function(){
			return {
				editing: false,
				expense: {
					id: 0,
					name: "",
					value: 0
				}
			}
		},
		componentDidMount: function(){
			this.setState({
				expense: {
					id: this.props.id,
					name: this.props.name,
					value: this.props.value					
				}
			})
		},
		
		changeName: function(){
			this.setState({
				name: this.refs.name.getValue()
			})
		},
		changeValue: function(){
			this.setState({
				value: this.refs.value.getValue()
			})
		}
		render: function(){
			var form = this.state.editing ? <div>	
					<i className="fa fa-times pointer" onClick={this.remove}></i>
					<Col xs={6} className="expense-item">
						<Input type="text" ref="name" value={this.state.expense.name} onChange={this.changeName}/>
					</Col>
					<Col xs={6} className="expense-item">
						<Input type="text" ref="value" value={this.state.expense.value} onChange={this.changeValue}/>
					</Col>
					<Button bsStyle="primary" onClick={this.save}>
						Save
					</Button>
				</div> : <div>
					<Col xs={6} className="expense-item">
						<p>{this.state.expense.name}</p>
					</Col>
					<Col xs={6} className="expense-item">
						<p>{this.state.expense.value}</p>
					</Col>
					<i className="fa fa-pencil-square-o pointer" onClick={this.handleClick}></i>
				</div>
			return <div>
				{form}	
			</div>
		}
	})
})