import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const SContainer = styled.div`
  background: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  padding: 32px;
  margin: 0 auto;
  width: 345px;
`

const Container = ({ children }: Props) => (
  <SContainer>
    {children}
  </SContainer>
)

export default Container
