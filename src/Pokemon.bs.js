'use strict';

var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

function pokemon(json) {
  return {
          name: Json_decode.field("name", Json_decode.string, json),
          url: Json_decode.field("url", Json_decode.string, json)
        };
}

function pokemonResponse(json) {
  return {
          count: Json_decode.optional((function (param) {
                  return Json_decode.field("count", Json_decode.$$int, param);
                }), json),
          next: Json_decode.optional((function (param) {
                  return Json_decode.field("next", Json_decode.string, param);
                }), json),
          previous: Json_decode.optional((function (param) {
                  return Json_decode.field("previous", Json_decode.string, param);
                }), json),
          results: Json_decode.field("results", (function (param) {
                  return Json_decode.array(pokemon, param);
                }), json)
        };
}

var Decode = {
  pokemon: pokemon,
  pokemonResponse: pokemonResponse
};

exports.Decode = Decode;
/* No side effect */
