import Card from './Card'
import { useQuery } from '@apollo/react-hooks';
import { useEffect, useState } from 'react';
import { GET_POKEMONS } from '../../graphql/get-pokemons';

function Index() {
  const [offset, setOffset] = useState(0);
  const [pokemon, setPokemon] = useState([]);
  const [count, setCount] = useState(1118);
  const [limit] = useState(12)

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { limit: limit, offset: offset }
  })

  useEffect(() => {
    if (data) {
      setPokemon(data.pokemons.results);
      setCount(data.pokemons.count);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }

  return (
    <div className={`grid grid-cols-12 gap-4 max-w-4xl mx-auto py-10`}>
      {
        pokemon.map(poke =>
          <Card
            key={poke.id}
            poke={poke}
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


export default Index
