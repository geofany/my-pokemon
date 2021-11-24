import React from 'react'

function Card(props) {
  return (
    <div
      className="col-span-12 md:col-span-4 bg-white hover:bg-primary-10 transform ease-out duration-300 rounded p-5 flex flex-col gap-2 cursor-pointer group"
    >
      <img src={props.img} alt={props.name} className="w-full h-auto border rounded-lg group-hover:border-dark-60 transform ease-out duration-300" />
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-60 font-bold">
          #{props.id}
        </p>
        <p className="text-sm text-gray-90 font-light">
          Total Owned : 10
        </p>
      </div>
      <p className="text-lg font-bold capitalize">
        {props.nickname} ({props.name})
      </p>
      <button
        className="bg-danger-60 py-1 text-white hover:bg-danger-70 rounded"
        onClick={() => {
          props.dispatch({
            type: 'REMOVE_POKEMON',
            nickname: props.nickname
          })
        }}
      >
        Remove Pokemon
      </button>
    </div>
  )
}


export default Card
