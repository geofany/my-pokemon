import React from 'react'

function Breadcrumb(props) {
  return (
    <div className="flex items-center gap-1 text-md">
      <p className="hover:text-warning-60 cursor-pointer transform ease-out duration-300">
        Pokédex
      </p>
      <p className="text-gray-60 capitalize">
        / {props.selected}
      </p>
    </div>
  )
}

export default Breadcrumb
