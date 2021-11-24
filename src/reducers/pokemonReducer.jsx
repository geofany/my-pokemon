export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return [...state, {
        id: action.pokemon.id,
        name: action.pokemon.name,
        img: action.pokemon.img,
        nickname: action.pokemon.nickname
      }]
    case 'REMOVE_POKEMON':
      return state.filter(pokemon => pokemon.nickname !== action.nickname)
    default:
      return state
  }
}