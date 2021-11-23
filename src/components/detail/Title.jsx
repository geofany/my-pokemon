import React from 'react'

function Title(props) {
  return (
    <p className="text-h6 font-bold capitalize">
      {props.name} <span className="text-gray-60">#{props.id}</span>
    </p>
  )
}

export default Title
