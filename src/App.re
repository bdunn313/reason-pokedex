[@bs.val] external fetch: string => Js.Promise.t('a) = "fetch";

type state =
  | Loading
  | Error
  | Loaded(array(Pokemon.t));

[@react.component]
let make = () => {
  let (state, setState) = React.useState(() => Loading);

  React.useEffect0(() => {
    Js.Promise.(
      fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      |> then_(response => response##text())
      |> then_(jsonResponse => {
           let res =
             jsonResponse
             |> Json.parseOrRaise
             |> Pokemon.Decode.pokemonResponse;
           setState(_prevState => Loaded(res.results));
           Js.Promise.resolve();
         })
      |> catch(err => {
           setState(_prevState => Error);
           Js.log2("Error", err);
           Js.Promise.resolve();
         })
      |> ignore
    );
    None;
  });

  <div role="main" className="flex flex-wrap">
    {switch (state) {
     | Loading => ReasonReact.string("Loading...")
     | Error => ReasonReact.string("Error!")
     | Loaded(data) =>
       data
       ->Belt.Array.mapWithIndex((i, pokemon) =>
           <PokemonCard key={pokemon.name ++ string_of_int(i)} pokemon />
         )
       ->React.array
     }}
  </div>;
};
