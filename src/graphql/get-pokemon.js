import { gql } from "graphql-tag";

export const GET_POKEMONS = gql`
  query pokemon_v2_pokemon($limit: Int!, $offset: Int!) {
    pokemon_v2_pokemon(limit: $limit, offset:$offset) {
      name
      id
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_pokemonmoves {
        pokemon_v2_move {
          name
        }
      }
    }
  }
`

