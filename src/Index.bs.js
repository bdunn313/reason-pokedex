'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var App$ReasonPokedex = require("./App.bs.js");

ReactDOMRe.renderToElementWithId(React.createElement(App$ReasonPokedex.make, { }), "root");

/*  Not a pure module */
