import React from 'react'
import Breadcrumb from './Breadcrumb'
import Card from './Card'

function Index(props) {
  return (
    <div className={`${props.menuActive === 'pokedex' && props.detail ? '' : 'hidden'} flex flex-col gap-4 max-w-4xl mx-auto py-10`}>
      <Breadcrumb selected={props.selected} setDetail={props.setDetail} />
      <Card />
    </div>
  )
}

export default Index
