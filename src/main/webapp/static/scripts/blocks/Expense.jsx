define(function(require){
	var React = require('react');
	var actions = require('actions/actions');
	var {Col, Button, Input} = require('react-bootstrap');
	return React.createClass({
		mixins: [
			React.LinkedStateMixin
		],
		getInitialState: function(){
			return {
				editing: false,
				name: ""
			}
		},
		componentDidMount: function(){
			this.setState({
				name: this.props.name
			})
		},
		handleClick: function(){
			this.setState({
				editing: !this.state.editing
			})
		},
		handleChange: function(){
			this.setState({
				name: this.refs.name.getValue()
			})
		},
		save: function(){
			actions.editExpense(this.state);
			this.handleClick();
		},
		render: function(){
			var form = this.state.editing ? <div>
					<Input type="text" ref="name" value={this.state.name} onChange={this.handleChange}/>
					<Button bsStyle= "primary" onClick={this.save}>
						Save
					</Button>
				</div> : <div>
					<h3>{this.state.name}</h3>
					<Button bsStyle= "primary" onClick={this.handleClick}>
						Edit
					</Button>
				</div>
			return <Col xs={12}>
				{form}				
			</Col>
		}
	})
})