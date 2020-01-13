'use strict';

var Json = require("@glennsl/bs-json/src/Json.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Pokemon$ReasonPokedex = require("./Pokemon.bs.js");

function App(Props) {
  var match = React.useState((function () {
          return /* Loading */0;
        }));
  var setState = match[1];
  var state = match[0];
  React.useEffect((function () {
          fetch("https://pokeapi.co/api/v2/pokemon/?limit=151").then((function (response) {
                      return response.text();
                    })).then((function (jsonResponse) {
                    var res = Pokemon$ReasonPokedex.Decode.pokemonResponse(Json.parseOrRaise(jsonResponse));
                    Curry._1(setState, (function (_prevState) {
                            return /* Loaded */[res.results];
                          }));
                    return Promise.resolve(/* () */0);
                  })).catch((function (err) {
                  Curry._1(setState, (function (_prevState) {
                          return /* Error */1;
                        }));
                  console.log("Error", err);
                  return Promise.resolve(/* () */0);
                }));
          return ;
        }), ([]));
  return React.createElement(React.Fragment, undefined, typeof state === "number" ? (
                state !== 0 ? "Error!" : "Loading..."
              ) : Belt_Array.mapWithIndex(state[0], (function (i, pkmn) {
                      return React.createElement("div", {
                                  key: pkmn.name + String(i)
                                }, pkmn.name);
                    })));
}

var make = App;

exports.make = make;
/* react Not a pure module */
