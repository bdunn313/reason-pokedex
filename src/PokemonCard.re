[@react.component]
let make = (~pokemon: Pokemon.t) => {
  <div>
    {ReasonReact.string(pokemon.name)}
    <br />
    <img src={Pokemon.getAvatarUrl(pokemon)} />
  </div>;
};
