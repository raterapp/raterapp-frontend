import React from 'react'
import styled from 'styled-components'
import Background from '../../components/Background'
import Container from '../../components/Container'
import Emoji from '../../components/Emoji'
const ScreenTitle = styled.h1`
  color: ${props => props.theme.black};
  font-size: 30px;
`

const Welcome = () => {
  // Logic
  return (
    <Background>
      <Container>
        <Emoji>👋</Emoji>
        <ScreenTitle>Добро пожаловать!</ScreenTitle>
      </Container>
    </Background>
  )
}

export default Welcome
