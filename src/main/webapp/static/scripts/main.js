// (function () {
    'use strict';

    var libs = '../bower_components/';

    requirejs.config({
        baseUrl: 'scripts',
        paths: {
            "react": libs + "react/react-with-addons",
            "JSXTransformer": libs + "react/JSXTransformer",
            "jsx": libs + "requirejs-react-jsx/jsx",
            "text": libs + "requirejs-text/text",
            "react-bootstrap": libs + "react-bootstrap/react-bootstrap",
            "reflux": libs + "reflux/dist/reflux",
            "lodash": libs + "lodash/lodash"
        },
        shim : {
            "react": {
              "exports": "React"
            },
            "JSXTransformer": "JSXTransformer",
        },
        config: {
            jsx: {
                fileExtension: ".jsx",
                transformOptions: {
                    harmony: true,
                    stripTypes: false,
                    inlineSourceMap: true
                },
                usePragma: false
            }
        }
    });
    
    require(['jsx!home'], function(Home){
        // var app = new Home();
        Home.init();
    });
// })