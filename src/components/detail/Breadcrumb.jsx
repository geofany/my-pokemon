import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumb(props) {
  return (
    <div className="flex items-center gap-1 text-md">
      <Link
        to="/"
        className="hover:text-warning-60 cursor-pointer transform ease-out duration-300"
      >
        Pokédex
      </Link>
      <p className="text-gray-60 capitalize">
        / {props.name}
      </p>
    </div>
  )
}

export default Breadcrumb
