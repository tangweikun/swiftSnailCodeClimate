import React, { PropTypes } from 'react'
import { Message, Content, ArrowWrapper, ArrowShape, Avatar40 } from './styled-components'

export const Arrow = ({ direction }) =>
  (<ArrowWrapper direction={direction}>
    <ArrowShape direction={direction} />
  </ArrowWrapper>)

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
}

const directionMap = {
  self: 'right',
  others: 'left',
}

export const ChatBubble = ({ sender, avatar, content }) =>
  (<Message sender={sender}>
    <Avatar40 src={avatar} />
    <Arrow direction={directionMap[sender]} />
    <Content sender={sender}>
      {content}
    </Content>
  </Message>)

ChatBubble.propTypes = {
  sender: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
