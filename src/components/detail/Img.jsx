import React from 'react'

function Img(props) {
  return (
    <img src={props.selectedPokemon.img} alt={props.selectedPokemon.name} className="border rounded-lg w-full h-auto" />
  )
}

export default Img
