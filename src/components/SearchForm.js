import React, { useState, useEffect } from 'react'
import SearchCard from './SearchCard'

const SearchForm = props => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  console.log(props)

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    const results = props.characterData.filter(character =>
      character.name
        .toString()
        .toLowerCase()
        .includes(searchTerm)
    )
    setSearchResults(results)
  }, [searchTerm])

  return (
    <section className="search-form">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />

      {searchResults.map(char => (
        <SearchCard {...char} />
      ))}
    </section>
  )
}
export default SearchForm
