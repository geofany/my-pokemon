import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import logo from '../../logo.png';

function Header(props) {
  let location  = useLocation();
  return (
    <header className="bg-danger-60 h-12 sm:h-24 flex-shrink-0 flex items-center justify-center text-sm sm:text-lg font-bold text-white gap-4">
      <Link
        to="/"
        className={`hover:text-warning-60 cursor-pointer ${location.pathname === '/' ? 'text-warning-60' : ''} transition ease-out duration-300`}
      >
        Pokédex
      </Link>
      <img
        className="w-10 h-10 sm:w-20 sm:h-20"
        src={logo}
        alt="pokeball"
      />
      <Link
        to="/mypokemon"
        className={`hover:text-warning-60 cursor-pointer ${location.pathname === '/mypokemon' ? 'text-warning-60' : ''} transition ease-out duration-300`}
      >
        My Pokémon
      </Link>
    </header>
  )
}

export default Header
