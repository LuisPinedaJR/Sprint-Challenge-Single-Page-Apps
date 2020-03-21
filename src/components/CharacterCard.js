import React from 'react'

const CharacterCard = props => {
  return (
    <span>
      <img src={props.characterData.image} alt="character" />
      <h2>Name: {props.characterData.name}</h2>
      <p>Status: {props.characterData.status}</p>
      <p>Species: {props.characterData.species}</p>
      <p>Gender: {props.characterData.gender}</p>
      <p>Origin: {props.characterData.origin.name}</p>
    </span>
  )
}

export default CharacterCard
