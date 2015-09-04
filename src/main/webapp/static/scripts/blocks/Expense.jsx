define(function(require){
	var React = require('react');
	var actions = require('actions/actions');
	var {Col, Button, Input, Row} = require('react-bootstrap');
	return React.createClass({
		mixins: [
			React.LinkedStateMixin
		],
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
		handleClick: function(){
			this.setState({
				editing: !this.state.editing
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
		},
		save: function(){
			actions.editExpense(this.state.expense);
			this.handleClick();
		},
		render: function(){
			var form = this.state.editing ? <div>	
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