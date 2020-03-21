import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 1em;
  padding: 0.25em 1em;
  font-size: 20px;
  text-decoration: none;
`

const HeaderImg = styled.img.attrs({
  src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  alt: 'rick',
})`
  width: 374px;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <HeaderImg />
      </header>
      <Button as="a" href="/characters">
        wubba lubba dub dub
      </Button>
    </section>
  )
}
