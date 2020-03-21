import React, { useEffect, useState } from 'react'
import axios from 'axios'

import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/'
      )
      .then(response => {
        console.log(response.data)
        setData(response.data.results)
      })
  }, [])

  return (
    <section className="character-list">
      <SearchForm characterData={data} />
      {data.map(characterData => (
        <CharacterCard key={characterData.id} characterData={characterData} />
      ))}
    </section>
  )
}
