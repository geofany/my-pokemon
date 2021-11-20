import React from 'react'

function Index(props) {
  return (
    <div className={`${props.menuActive === 'mypokemon' ? '' : 'hidden'}`}>
      this is mypokemon Pages
    </div>
  )
}

export default Index
