import { gql } from "graphql-tag";

export const GET_COUNT = gql`
  query pokemon_v2_pokemon_aggregate {
    pokemon_v2_pokemon_aggregate {
      aggregate {
        count
      }
    } 
  }
`