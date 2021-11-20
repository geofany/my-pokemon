import React from 'react'
import logo from '../../logo.png';

function Header(props) {
  return (
    <div className="bg-danger-60 h-12 sm:h-24 flex-shrink-0 flex items-center justify-center text-sm sm:text-lg font-bold text-white gap-4">
      <p
        className={`hover:text-warning-60 cursor-pointer ${props.menuActive === 'pokedex' ? 'text-warning-60' : ''} transition ease-out duration-300`}
        onClick={() => {
          props.setmenuActive('pokedex')
          props.setDetail(false)
        }}
      >
        Pokédex
      </p>
      <img
        className="w-10 h-10 sm:w-20 sm:h-20"
        src={logo}
        alt="pokeball"
      />
      <p
        className={`hover:text-warning-60 cursor-pointer ${props.menuActive === 'mypokemon' ? 'text-warning-60' : ''} transition ease-out duration-300`}
        onClick={() => {
          props.setmenuActive('mypokemon')
          props.setDetail(false)
        }}
      >
        My Pokémon
      </p>
    </div>
  )
}

export default Header
