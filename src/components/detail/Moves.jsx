import React from 'react'

function Moves(props) {
  return (
    <div>
      <p className="mb-2 text-md font-bold">
        Moves :
      </p>
      <div className="flex flex-wrap gap-1">
        {
          props.selectedPokemon.moves.map(move => (
            <div className="bg-gray-10 border border-dark-60 rounded-full px-2 py-1">
              {move}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Moves
