import React from 'react'

function BtnCatch(props) {
  return (
    <button
      className="bg-warning-60 py-1 rounded hover:bg-warning-70 font-bold"
      onClick={() => {
        props.gacha()
        props.openModal()
      }}
    >
      CATCH THEM!
    </button>
  )
}

export default BtnCatch
