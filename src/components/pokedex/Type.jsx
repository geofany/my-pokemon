import { React } from 'react'

function Type(props) {
  let style = 'bg-primary-60 text-white'

  switch (props.type) {
    case 'bug':
      style = 'bg-success-90 text-white'
      break
    case 'dragon':
      style = 'bg-split-primary-danger text-white'
      break
    case 'fairy':
      style = 'bg-danger-30 text-dark-60'
      break
    case 'fire':
      style = 'bg-danger-60 text-white'
      break
    case 'ghost':
      style = 'bg-secondary-60 text-white'
      break
    case 'ground':
      style = 'bg-split-warning-warning text-dark-60'
      break
    case 'normal':
      style = 'bg-gray-60 text-dark-60'
      break
    case 'psychic':
      style = 'bg-secondary-80 text-white'
      break
    case 'steel':
      style = 'bg-gray-50 text-dark-60'
      break
    case 'dark':
      style = 'bg-dark-60 text-white'
      break
    case 'electric':
      style = 'bg-warning-60 text-dark-60'
      break
    case 'fighting':
      style = 'bg-warning-90 text-white'
      break
    case 'flying':
      style = 'bg-split-primary-gray text-dark-60'
      break
    case 'grass':
      style = 'bg-success-60 text-dark-60'
      break
    case 'ice':
      style = 'bg-primary-60 text-dark-60'
      break
    case 'poison':
      style = 'bg-secondary-70 text-white'
      break
    case 'rock':
      style = 'bg-warning-80 text-white'
      break
    case 'water':
      style = 'bg-primary-80 text-white'
      break
    default:
      style = 'bg-primary-60 text-white'
      break
  }

  return (
    <div className={`${style} col-span-1 rounded flex items-center justify-center capitalize py-1`}>
      {props.type}
    </div>
  )
}

export default Type
