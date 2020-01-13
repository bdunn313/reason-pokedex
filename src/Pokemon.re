type t = {
  name: string,
  url: string,
};

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
