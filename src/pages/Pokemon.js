import React from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

import pokemons from '../data/pokemons.json'

const Pokemon = ({ match, location }) => {
  const id = Number(match.params.id)
  const { types } = queryString.parse(location.search)

  console.log(types)

  const pokemon = pokemons.find(pokemon => pokemon.id === id)

  return (
    <div>
      <Link to="/">Back</Link>
      <h2>Pokemon #{pokemon.id}</h2>
      <p>{pokemon.description}</p>
      {types && <p>{JSON.stringify(pokemon.types)}</p>}
    </div>
  )
}

export default Pokemon
