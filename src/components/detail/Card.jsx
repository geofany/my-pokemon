import React from 'react'
import Type from '../pokedex/Type'
import BtnCatch from './BtnCatch'
import Img from './Img'
import Info from './Info'
import Moves from './Moves'
import Title from './Title'
import { useState, useEffect } from 'react';
import { GET_POKEMON } from '../../graphql/get-pokemon';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router';

function Card() {
  let urlParams = useParams();
  const [pokemon, setPokemon] = useState([])

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: urlParams.pokemonName }
  })

  useEffect(() => {
    if (data) {
      setPokemon(data);
    }
  }, [data])

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }

  // console.log(pokemon.pokemon.name)

  return (
    <div className="grid grid-cols-12 bg-white rounded p-5 gap-4">
      <div className="col-span-12 sm:col-span-5">
        {/* <Img selectedPokemon={pokemon} /> */}
      </div>
      <div className="col-span-12 sm:col-span-7 flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-3">
           {/* <Title name={pokemon.pokemon.name} id={pokemon.pokemon.id} /> */}
          {/* <Info selectedPokemon={selectedPokemon} /> */}
          <div>
            <p className="mb-2 text-md font-bold">
              Types :
            </p>
            <div className="grid grid-cols-2 gap-2">
              {/* {
                selectedPokemon.types.map(type => (
                  <Type type={type} />
                ))
              } */}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-sm text-gray-60">
            Total Owned : 10
          </p>
          <BtnCatch />
        </div>
      </div>
      <div className="col-span-12">
        {/* <Moves selectedPokemon={selectedPokemon} /> */}
      </div>
    </div>
  )
}

export default Card
