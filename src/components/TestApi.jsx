import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemon';

function TestApi() {
  const { data: {pokemon_v2_pokemon = []} = {} } = useQuery(GET_POKEMONS, {
    variables: { limit: 10, offset: 10 }
  })

  return (
    <div>
      {pokemon_v2_pokemon && pokemon_v2_pokemon.map(pokemon => JSON.stringify(pokemon, null, 2))}
    </div>
  )
}

export default TestApi
