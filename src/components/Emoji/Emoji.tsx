import React from 'react'
import styled from 'styled-components'

const SEmoji = styled.p`
  font-size: ${props => props.theme.emojiSize};
  line-height: 100%;
  padding: 0;
  margin: 0;
  text-align: center;
  margin-bottom: 32px;
`

interface Props {
  children: string
}

const Emoji = ({ children }: Props) => <SEmoji>{children}</SEmoji>

export default Emoji
