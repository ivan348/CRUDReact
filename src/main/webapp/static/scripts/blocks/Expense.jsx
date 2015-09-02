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
		handleClick: function(){
			this.setState({
				editing: !this.state.editing
			})
		},
		render: function(){
			var form = this.state.editing ? <div>
					<Input type="text" value={this.props.name}/>
					<Button bsStyle= "primary" onClick={this.handleClick}>
						Save
					</Button>
				</div> : <div>
					<h3>{this.props.name}</h3>
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