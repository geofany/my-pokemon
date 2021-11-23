import React from 'react'

function Img(props) {
  return (
    <img src={props.image} alt={props.name} className="border rounded-lg w-full h-auto" />
  )
}

export default Img
