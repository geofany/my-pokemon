import React from 'react'

function Title(props) {
  return (
    <p className="text-h6 font-bold capitalize">
      {props.selectedPokemon.name} <span className="text-gray-60">#{props.selectedPokemon.id}</span>
    </p>
  )
}

export default Title
