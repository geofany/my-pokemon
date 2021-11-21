import { React, useState, useEffect } from 'react'

function Type(props) {


  const [style, setStyle] = useState('')

  useEffect(() => {
    switch (props.type) {
      case 'bug':
        setStyle('bg-success-90 text-white')
        break
      case 'dragon':
        setStyle('bg-split-primary-danger text-white')
        break
      case 'fairy':
        setStyle('bg-danger-30 text-dark-60')
        break
      case 'fire':
        setStyle('bg-danger-60 text-white')
        break
      case 'ghost':
        setStyle('bg-secondary-60 text-white')
        break
      case 'ground':
        setStyle('bg-split-warning-warning text-dark-60')
        break
      case 'normal':
        setStyle('bg-gray-60 text-dark-60')
        break
      case 'psychic':
        setStyle('bg-secondary-80 text-white')
        break
      case 'steel':
        setStyle('bg-gray-50 text-dark-60')
        break
      case 'dark':
        setStyle('bg-dark-60 text-white')
        break
      case 'electric':
        setStyle('bg-warning-60 text-dark-60')
        break
      case 'fighting':
        setStyle('bg-warning-90 text-white')
        break
      case 'flying':
        setStyle('bg-split-primary-gray text-dark-60')
        break
      case 'grass':
        setStyle('bg-success-60 text-dark-60')
        break
      case 'ice':
        setStyle('bg-primary-60 text-dark-60')
        break
      case 'poison':
        setStyle('bg-secondary-70 text-white')
        break
      case 'rock':
        setStyle('bg-warning-80 text-white')
        break
      case 'water':
        setStyle('bg-primary-80 text-white')
        break
      default:
        setStyle('bg-primary-60 text-white')
        break
    }
  })

  return (
    <div className={`${style} col-span-1 rounded flex items-center justify-center capitalize py-1`}>
      {props.type}
    </div>
  )
}

export default Type
