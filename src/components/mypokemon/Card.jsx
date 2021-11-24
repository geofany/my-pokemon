import React, { useState } from 'react'
import Modal from './Modal'

function Card(props) {

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div
        className="col-span-12 md:col-span-4 bg-white rounded p-5 flex flex-col gap-2"
      >
        <img src={props.img} alt={props.name} className="w-full h-auto border rounded-lg" />
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-60 font-bold">
            #{props.id}
          </p>
          <p className="text-sm text-gray-90 font-light">
            Total Owned : {props.count}
          </p>
        </div>
        <p className="text-lg font-bold capitalize">
          {props.nickname} ({props.name})
        </p>
        <button
          className="bg-danger-60 py-1 text-white hover:bg-danger-70 rounded transform ease-out duration-300"
          onClick={() => {

            openModal()
          }}
        >
          Remove Pokémon
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
        dispatch={props.dispatch}
        nickname={props.nickname}
      />
    </>
  )
}


export default Card
