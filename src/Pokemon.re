type t = {
  name: string,
  url: string,
};

let getId = pokemon => {
  let len = String.length(pokemon.url);
  String.sub(pokemon.url, 34, len - 35);
};
let getAvatarUrl = pokemon =>
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
  ++ getId(pokemon)
  ++ ".png";

type pokemonResponse = {
  count: option(int),
  next: option(string),
  previous: option(string),
  results: array(t),
};

module Decode = {
  let pokemon = json =>
    Json.Decode.{
      name: json |> field("name", string),
      url: json |> field("url", string),
    };
  let pokemonResponse = json =>
    Json.Decode.{
      count: json |> optional(field("count", int)),
      next: json |> optional(field("next", string)),
      previous: json |> optional(field("previous", string)),
      results: json |> field("results", array(pokemon)),
    };
};
