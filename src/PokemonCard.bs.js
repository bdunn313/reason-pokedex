'use strict';

var React = require("react");
var Pokemon$ReasonPokedex = require("./Pokemon.bs.js");

function PokemonCard(Props) {
  var pokemon = Props.pokemon;
  console.log(pokemon.url, Pokemon$ReasonPokedex.getAvatarUrl(pokemon));
  return React.createElement("div", {
              className: "flex1 text-gray-700"
            }, pokemon.name, React.createElement("br", undefined), React.createElement("img", {
                  src: Pokemon$ReasonPokedex.getAvatarUrl(pokemon)
                }));
}

var make = PokemonCard;

exports.make = make;
/* react Not a pure module */
