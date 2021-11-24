import React, { useContext } from 'react'
import Card from './Card'
import { PokemonContext } from '../../contexts/PokemonContext'


function Index(props) {
  const { myPokemons, dispatch } = useContext(PokemonContext);
  console.log(myPokemons)
  return (
    <div className={`grid grid-cols-12 gap-4 max-w-4xl mx-3 md:mx-auto py-10`}>
      {
        myPokemons.map(pokemon =>
          <Card
            key={pokemon.nickname}
            name={pokemon.name}
            nickname={pokemon.nickname}
            id={pokemon.id}
            img={pokemon.img}
            dispatch={dispatch}
          />
        )
      }
    </div>
  )
}

export default Index
