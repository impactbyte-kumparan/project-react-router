import React from 'react'
import { Link } from 'react-router-dom'

import pokemons from '../data/pokemon.json'

const Home = () => {
  return (
    <div>
      <h1>List of Pokemon</h1>
      <ul>
        {pokemons.map(pokemon => {
          return (
            <li>
              <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Home
