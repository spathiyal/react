import React from "react";
import Pokecard from "./Pokecard";


const Pokedex(props){
    return (
      <div>
        {props.pokeman.map(p=>(<Pokecard
            id={p.id}
            name = {p.name}
            type = {p.tyoe}
            exp={p.base_experience}
            />))}
      </div>
    )
}

export default Pokedex;