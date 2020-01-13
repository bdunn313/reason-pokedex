[@react.component]
let make = (~pokemon: Pokemon.t) => {
  Js.log2(pokemon.url, Pokemon.getAvatarUrl(pokemon));
  <div className="flex1 text-gray-700">
    {ReasonReact.string(pokemon.name)}
    <br />
    <img src={Pokemon.getAvatarUrl(pokemon)} />
  </div>;
};
