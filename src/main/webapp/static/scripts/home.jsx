define(function (require) {
    var self = this;
    var React = require('react');
    var r = React.DOM;
    var { Col, Row } = require('react-bootstrap');
    var Menu = require("jsx!./blocks/Menu")
    var Content = require("jsx!./blocks/Content")
    var Header = React.createClass({
        getInitialState: function () {
            return {

            };
        },
        render: function () {
            var text = "hello";
            return <h1>{text}</h1>;
        }
    })
    var Grid = React.createClass({
        render: function(){
            return <div>
                    <Header/>
                    <Row>
                        <Col xs={2}>
                            <Menu/>
                        </Col>
                        <Col xs={10}>
                            <Content/>    
                        </Col>
                    </Row>
                </div>
        }
    })
    this.init = function(){
        React.render(React.createElement(Grid, null), document.getElementById('application'));   
    }
    return self
})