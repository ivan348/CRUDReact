(function () {
    'use strict';

    var libs = 'bower_components/';

    requirejs.config({
        paths: {

        },
        shim: {

        }
    });

    define('react', function (require) {
        var React = require('../bower_components/react/react-with-addons');
        window.React = React;
        return React;
    });
    define(function (require) {
        var React = require('react');

        var r = React.DOM;
        var Header = React.createClass({
            getInitialState: function () {
                return {

                };
            },
            render: function () {
                var text = "hello";
                return r.h1("text")
            }
        })
    })
    React.render(Header,document.getElementById('application'));
})