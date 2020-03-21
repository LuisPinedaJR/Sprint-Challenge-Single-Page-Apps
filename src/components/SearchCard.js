import React from 'react'

const SearchCard = props => {
  return (
    <span>
      {/* {console.log(props)} */}
      <img src={props.image} alt="character" />
      <h2>Name: {props.name}</h2>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
      <p>Origin: {props.origin.name}</p>
    </span>
  )
}
export default SearchCard
