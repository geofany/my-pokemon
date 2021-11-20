import React from 'react'

function Index(props) {
  return (
    <div className={`${props.menuActive === 'pokedex' && props.detail ? '' : 'hidden'}`}>
      detail pokemon will go here
    </div>
  )
}

export default Index
