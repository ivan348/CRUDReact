define(function (require) {
    var self = this;
    var React = require('react');
    var r = React.DOM;
    var { Col, Row } = require('react-bootstrap');
    var Menu = require("jsx!./blocks/Menu");
    var Content = require("jsx!./blocks/Content");
    var Router = require("react-router");
    var Route = Router.Route;
    var Routes = Router.Routes;
    var RouteHandler = Router.RouteHandler;
    var ExpenseList = require("jsx!./blocks/ExpenseList");

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
                            <RouteHandler/>   
                        </Col>
                    </Row>
                </div>
        }
    })
    var routes = <Route handler={Grid}>
        <Route name="expense list" path="/expenses" handler={ExpenseList} />
    </Route>
    this.init = function(){
        // React.render(<Route children={routes}/>, document.getElementById('application'));   
        Router.run(routes, Router.HashLocation, (Ro1ot) => {
            React.render(<Ro1ot/>, document.getElementById('application'));
        });
    }
    return self
})