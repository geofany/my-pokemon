import React, { createContext, useReducer, useEffect } from 'react'
import { pokemonReducer } from '../reducers/pokemonReducer'

export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
  const [myPokemons, dispatch] = useReducer(pokemonReducer, [], () => {
    const localData = localStorage.getItem('my_pokemon')
    return localData ? JSON.parse(localData) : []
  })
  useEffect(() => {
    localStorage.setItem('my_pokemon', JSON.stringify(myPokemons))
  }, [myPokemons]);
  
  return (
    <PokemonContext.Provider value={{ myPokemons, dispatch }}>
      {props.children}
    </PokemonContext.Provider>
  )
}

export default PokemonContextProvider
