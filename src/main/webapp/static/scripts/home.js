 define([function (require) {
    var self = this;
    var React = require('react');
    var r = React.DOM;
    var Header = React.createClass({
        getInitialState: function () {
            return {

            };
        },
        render: function () {
            var text = "hello";
            // return (<h1>text</h1>);
        }
    })
    this.init = function(){
        React.render(Header,document.getElementById('application'));   
    }
    return self
})