import React, { useState } from 'react'
import Card from './Card'
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../../graphql/get-pokemon';
import { GET_COUNT } from '../../graphql/get-count';

function Index(props) {
  const [offset, setOffset] = useState(0)
  const { data: { pokemon_v2_pokemon = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { limit: 12, offset: offset }
  })
  const { data: { pokemon_v2_pokemon_aggregate = [] } = {} } = useQuery(GET_COUNT)

  return (
    <div className={`${props.menuActive === 'pokedex' && !props.detail ? '' : 'hidden'} grid grid-cols-12 gap-4 max-w-4xl mx-auto py-10`}>
      {
        pokemon_v2_pokemon && pokemon_v2_pokemon.map(pokemon =>
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            setDetail={props.setDetail}
            setSelected={props.setSelected}
          />
        )
      }
      <div className="flex items-center">
        <button className="px-4 py-2 text-white bg-primary-80 hover:bg-primary-90 rounded-l" onClick={() => setOffset(offset - 12)} disabled={offset === 0 ? true : false}>
          Prev
        </button>
        <button className="px-4 py-2 text-white bg-primary-80 hover:bg-primary-90 rounded-r" onClick={() => setOffset(offset + 12)} disabled={offset > pokemon_v2_pokemon_aggregate.aggregate.count - 12 ? true : false}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Index
