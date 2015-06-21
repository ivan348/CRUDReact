// (function () {
//     'use strict';

    var libs = '../bower_components/';

    requirejs.config({
        baseUrl: 'scripts',
        paths: {
            "react": libs + "react/react-with-addons",
            "JSXTransformer": libs + "react/JSXTransformer",
            "jsx": libs + "requirejs-react-jsx/jsx",
            "text": libs + "requirejs-text/text"
        },
        shim : {
            "react": {
              "exports": "React"
            },
            "JSXTransformer": "JSXTransformer"
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
        var app = new Home();
        app.init();
    });
// })