import React from 'react'
import Type from './Type'

function Card(props) {
  return (
    <div
      className="col-span-12 md:col-span-4 bg-white hover:bg-primary-10 transform ease-out duration-300 rounded p-5 flex flex-col gap-2 cursor-pointer"
      onClick={() => {
        props.setDetail(true)
        props.setSelected(props.pokemon.name)
      }}>
      <img src={props.pokemon.img} alt="pokemon" className="w-full h-auto border rounded-lg" />
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
          props.pokemon.types.map(type => (
            <Type key={type} type={type} />
          ))
        }
      </div>
    </div>
  )
}

export default Card
