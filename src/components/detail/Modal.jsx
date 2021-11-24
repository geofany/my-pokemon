import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react';

export default function Modal(props) {
  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => { }}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-dark-100-30" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-auto p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-dark-60"
              >
                <p className={`${props.catched ? '' : 'hidden'}`}>
                  Success to catch Pokémon!
                </p>
                <p className={`${props.catched ? 'hidden' : ''}`}>
                  Failed to catch Pokémon!
                </p>
              </Dialog.Title>
              <div className="mt-1">
                <p className={`${props.catched ? '' : 'hidden'} text-sm text-gray-90`}>
                  Give your Pokémon name
                </p>
                <p className={`${props.catched ? 'hidden' : ''} text-sm text-gray-90`}>
                  Don't give up
                </p>
              </div>
              <div className={`${props.catched ? '' : 'hidden'}`}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={props.name}
                  className={`border rounded px-2 py-1 focus:outline-none w-full ${props.duplicate ? 'border-danger-60' : 'border-gray-60 focus:border-gray-90'}`}
                  onChange={props.nameHandler}
                />
                <div>
                  <small className={`text-danger-60 ${props.duplicate ? '' : 'hidden'}`}>
                    Name already exist!
                  </small>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  disabled={props.duplicate ? true : false}
                  className={`${props.catched ? '' : 'hidden'} ${props.duplicate ? 'text-gray-60 bg-gray-10 cursor-not-allowed' : 'text-success-60 bg-success-10 hover:bg-success-20'} inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-success-50`}
                  onClick={() => {
                    props.closeModal()
                    props.dispatch({
                      type: 'ADD_POKEMON',
                      pokemon: {
                        id: props.data.pokemon.id,
                        name: props.data.pokemon.name,
                        img: props.data.pokemon.sprites.front_default,
                        nickname: props.name
                      }
                    })
                    props.setName('')
                  }}
                >
                  Save!
                </button>
                <button
                  type="button"
                  className={`${props.catched ? 'hidden' : ''} inline-flex justify-center px-4 py-2 text-sm font-medium text-danger-60 bg-danger-10 border border-transparent rounded-md hover:bg-danger-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-danger-50`}
                  onClick={props.closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
