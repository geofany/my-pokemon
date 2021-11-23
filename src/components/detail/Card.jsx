import React from 'react'
import BtnCatch from './BtnCatch'
import Type from '../pokedex/Type'
import Img from './Img'
import Info from './Info'
import Moves from './Moves'
import Title from './Title'
import { GET_POKEMON } from '../../graphql/get-pokemon';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router';

function Card() {
  let urlParams = useParams();

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: urlParams.pokemonName }
  })

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }

  if (data) {
    const pokemon = data.pokemon
    const { sprites, moves, types, abilities } = pokemon
    return (
      <div className="grid grid-cols-12 bg-white rounded p-5 gap-4">
        <div className="col-span-12 sm:col-span-5">
          <Img image={sprites.front_default} name={pokemon.name} />
        </div>
        <div className="col-span-12 sm:col-span-7 flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-3">
            <Title name={pokemon.name} id={pokemon.id} />
            <Info weight={pokemon.weight} height={pokemon.height} abilities={abilities} />
            <div>
              <p className="mb-2 text-md font-bold">
                Types :
              </p>
              <div className="grid grid-cols-2 gap-2">
                {
                  types.map(type => (
                    <Type key={type.type.name} type={type.type.name} />
                  ))
                }
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
          <p className="mb-2 text-md font-bold">
            Moves :
          </p>
          <div className="flex flex-wrap gap-1">
            {
              moves.map(move =>
                <Moves key={move.move.name} move={move.move.name} />
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Card
