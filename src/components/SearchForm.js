import React, { useState, useEffect } from 'react'

const SearchForm = props => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  {
    console.log(props)
  }
  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    const results = props.characterData.filter(
      character => {
        character.toLowerCase().includes(searchTerm)
      }
      // console.log('character', character)
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
      <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </section>
  )
}
export default SearchForm
