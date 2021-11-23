import Card from './Card'
import { useQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import { GET_POKEMONS } from '../../graphql/get-pokemons';

function Index() {
  const [offset, setOffset] = useState(0);
  const [limit] = useState(12)

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { limit: limit, offset: offset }
  })

  if (loading) {
    return <div className="grid grid-cols-12 gap-4 max-w-4xl mx-3 md:mx-auto py-10">Loading...</div>
  }
  if (error) {
    return <div className="grid grid-cols-12 gap-4 max-w-4xl mx-3 md:mx-auto py-10">Error! {error.message}</div>
  }

  if (data) {
    const pokemons = data.pokemons.results
    const count = data.pokemons.count
    return (
      <div className="grid grid-cols-12 gap-4 max-w-4xl mx-3 md:mx-auto py-10">
        {
          pokemons.map(pokemon =>
            <Card
              key={pokemon.id}
              pokemon={pokemon}
            />
          )
        }
        <div className="flex items-center">
          <button className="px-4 py-2 text-white bg-primary-80 hover:bg-primary-90 rounded-l" onClick={() => setOffset(offset - limit)} disabled={offset === 0 ? true : false}>
            Prev
          </button>
          <button className="px-4 py-2 text-white bg-primary-80 hover:bg-primary-90 rounded-r" onClick={() => setOffset(offset + limit)} disabled={offset > count - limit ? true : false}>
            Next
          </button>
        </div>
      </div>
    )

  }

}


export default Index
