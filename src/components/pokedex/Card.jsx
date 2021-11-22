import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Type from './Type'

function Card(props) {

  const [img, setImg] = useState('');

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokemon.name}`)
      .then(res => {
        setImg(res.data.sprites.other['official-artwork'].front_default)
      })
  })

  return (
    <div
      className="col-span-12 md:col-span-4 bg-white hover:bg-primary-10 transform ease-out duration-300 rounded p-5 flex flex-col gap-2 cursor-pointer group"
      onClick={() => {
        props.setDetail(true)
        props.setSelected(props.pokemon.name)
      }}>
      <img
        src={img}
        alt="pokemon"
        className="w-full h-auto border rounded-lg group-hover:border-dark-60 transform ease-out duration-300"
      />
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-60 font-bold">
          #{props.pokemon.id}
        </p>
        <p className="text-sm text-gray-90 font-light">
          Total Owned : 10
        </p>
      </div>
      <p className="text-lg font-bold capitalize">
        {props.pokemon.name}
      </p>
      <div className="grid grid-cols-2 gap-2">
        {
          props.pokemon.pokemon_v2_pokemontypes.map(type => (
            <Type key={type.pokemon_v2_type.name} type={type.pokemon_v2_type.name} />
          ))
        }
      </div>
    </div>
  )
}

export default Card
