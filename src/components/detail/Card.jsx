import React, { Fragment, useState, useContext } from 'react';
import BtnCatch from './BtnCatch';
import Type from './Type';
import Img from './Img';
import Info from './Info';
import Moves from './Moves';
import Title from './Title';
import { Dialog, Transition } from '@headlessui/react';
import { GET_POKEMON } from '../../graphql/get-pokemon';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router';
import { PokemonContext } from '../../contexts/PokemonContext'

function Card() {
  let urlParams = useParams();

  const { myPokemons, dispatch } = useContext(PokemonContext);

  let [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [catched, setCatched] = useState(false)
  const [duplicate, setDuplicate] = useState(false)

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: urlParams.pokemonName }
  })

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error! {error.message}</div>
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function gacha() {
    setCatched(Math.floor(Math.random() * 100) >= 50 ? true : false)
  }

  function nameHandler(event) {
    let nickname = myPokemons.find(pokemon => pokemon.nickname === event.target.value)
    setDuplicate(nickname ? true : false)
    setName(event.target.value)
  }

  if (data) {
    const pokemon = data.pokemon
    const { sprites, moves, types, abilities } = pokemon
    let count = myPokemons.filter(pokemons => pokemons.name === pokemon.name).length
    return (
      <>
        <div className="grid grid-cols-12 bg-white rounded p-5 gap-4">
          <div className="col-span-12 sm:col-span-5">
            <Img image={sprites.front_default} name={pokemon.name} />
          </div>
          <div className="col-span-12 sm:col-span-7 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              <Title name={pokemon.name} id={pokemon.id} />
              <Info weight={pokemon.weight} height={pokemon.height} abilities={abilities} />
              <div>
                <p className="mb-2 text-md font-bold">
                  Types :
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {
                    types.map(type => (
                      <Type key={type.type.name} type={type.type.name} />
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-gray-60">
                Total Owned : {count}
              </p>
              <BtnCatch gacha={gacha} openModal={openModal} />
            </div>
          </div>
          <div className="col-span-12">
            <p className="mb-2 text-md font-bold">
              Moves :
            </p>
            <div className="flex flex-wrap gap-1">
              {
                moves.map(move =>
                  <Moves key={move.move.name} move={move.move.name} />
                )
              }
            </div>
          </div>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            static
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
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

              {/* This element is to trick the browser into centering the modal contents. */}
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
                    <p className={`${catched ? '' : 'hidden'}`}>
                      Success to catch Pokémon!
                    </p>
                    <p className={`${catched ? 'hidden' : ''}`}>
                      Failed to catch Pokémon!
                    </p>
                  </Dialog.Title>
                  <div className="mt-1">
                    <p className={`${catched ? '' : 'hidden'} text-sm text-gray-90`}>
                      Give your Pokémon name
                    </p>
                    <p className={`${catched ? 'hidden' : ''} text-sm text-gray-90`}>
                      Don't give up
                    </p>
                  </div>
                  <div className={`${catched ? '' : 'hidden'}`}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={name}
                      className={`border rounded px-2 py-1 focus:outline-none w-full ${duplicate ? 'border-danger-60' : 'border-gray-60 focus:border-gray-90'}`}
                      onChange={nameHandler}
                    />
                    <div>
                      <small className={`text-danger-60 ${duplicate ? '' : 'hidden'}`}>
                        Name already exist!
                      </small>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      disabled={duplicate ? true : false}
                      className={`${catched ? '' : 'hidden'} ${duplicate ? 'text-gray-60 bg-gray-10 cursor-not-allowed' : 'text-success-60 bg-success-10 hover:bg-success-20'} inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-success-50`}
                      onClick={() => {
                        closeModal()
                        dispatch({
                          type: 'ADD_POKEMON',
                          pokemon: {
                            id: data.pokemon.id,
                            name: data.pokemon.name,
                            img: data.pokemon.sprites.front_default,
                            nickname: name
                          }
                        })
                        setName('')
                      }}
                    >
                      Save!
                    </button>
                    <button
                      type="button"
                      className={`${catched ? 'hidden' : ''} inline-flex justify-center px-4 py-2 text-sm font-medium text-danger-60 bg-danger-10 border border-transparent rounded-md hover:bg-danger-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-danger-50`}
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </>
    )
  }
}

export default Card
