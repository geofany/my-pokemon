import React from 'react'
import Card from './Card'

function Index(props) {
  return (
    <div className={`${props.menuActive === 'pokedex' && !props.detail ? '' : 'hidden'} grid grid-cols-12 gap-4 max-w-4xl mx-auto py-10`}>
      {
        props.pokemon.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} setDetail={props.setDetail} setSelected={props.setSelected} />
        ))
      }
    </div>
  )
}

export default Index
