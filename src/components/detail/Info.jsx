import React from 'react'

function Info(props) {
  return (
    <div className="bg-primary-30 p-5 text-lg text-white grid grid-cols-2 rounded">
      <div className="col-span-1 flex flex-col gap-4">
        <div>
          <p>
            Height
          </p>
          <p className="text-dark-60">
            {props.selectedPokemon.height}
          </p>
        </div>
        <div>
          <p>
            Weight
          </p>
          <p className="text-dark-60">
            {props.selectedPokemon.weight}
          </p>
        </div>
      </div>
      <div className="col-span-1">
        <p>
          Abilities
        </p>
        {
          props.selectedPokemon.abilities.map(ability => (
            <p className="text-dark-60 capitalize">
              {ability}
            </p>
          ))
        }
      </div>
    </div>
  )
}

export default Info
