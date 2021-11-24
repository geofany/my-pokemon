import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PokemonContext } from '../../contexts/PokemonContext';

function Card(props) {
  const { myPokemons } = useContext(PokemonContext);
  let count = myPokemons.filter(pokemon => pokemon.name === props.pokemon.name).length
  return (
    <Link
      to={`${props.pokemon.name}`}
      className="col-span-12 md:col-span-4 bg-white hover:bg-primary-10 transform ease-out duration-300 rounded p-5 flex flex-col gap-2 cursor-pointer group"
    >
      <img
        src={props.pokemon.image}
        alt="pokemon"
        className="w-full h-auto border rounded-lg group-hover:border-dark-60 transform ease-out duration-300"
      />
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-60 font-bold">
          #{props.pokemon.id}
        </p>
        <p className="text-sm text-gray-90 font-light">
          Total Owned : {count}
        </p>
      </div>
      <p className="text-lg font-bold capitalize">
        {props.pokemon.name}
      </p>
    </Link>
  )
}

export default Card
