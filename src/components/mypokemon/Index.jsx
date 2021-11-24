import React, { useContext } from 'react'
import Card from './Card'
import { PokemonContext } from '../../contexts/PokemonContext'


function Index(props) {
  const { myPokemons, dispatch } = useContext(PokemonContext);
  if (myPokemons.length === 0) {
    return (
      <div className="max-w-4xl mx-3 md:mx-auto py-10">
        You don't have a Pokémon, Catch one of them!
      </div>
    )
  } else {
    return (
      <div className="grid grid-cols-12 gap-4 max-w-4xl mx-3 md:mx-auto py-10">
        {
          myPokemons.map(pokemon =>
            <Card
              key={pokemon.nickname}
              name={pokemon.name}
              nickname={pokemon.nickname}
              id={pokemon.id}
              img={pokemon.img}
              count={myPokemons.filter(pokemons => pokemons.name === pokemon.name).length}
              dispatch={dispatch}
            />
          )
        }
      </div>
    )
  }
}

export default Index
