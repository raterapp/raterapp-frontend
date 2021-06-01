import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const SBackground = styled.main`
  background: ${props => props.theme.primaryGradient};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Background = ({ children }: Props) => (<SBackground>{children}</SBackground>)

export default Background
