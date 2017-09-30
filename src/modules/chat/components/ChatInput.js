import React, { PropTypes } from 'react'
import { Popover } from 'antd'
import {
  ChatInputContainer,
  ChatButtonsContainer,
  ChatInput,
  ChatAdditionButton,
  EmojiTable,
  Emoji,
} from './styled-components'
import emojis from '../constants/emojis'

const ChatInputControls = ({ sendMessage, chatRoomId }) => {
  let messageInput = null
  const handleSend = () => {
    sendMessage(
      {
        chatRoomId,
        text: messageInput.refs.input.value,
      },
    )
    messageInput.refs.input.value = ''
  }
  const addEmoji = (emoji) => {
    if (messageInput) {
      messageInput.refs.input.value += `${emoji} `
    }
  }
  return (
    <ChatInputContainer>
      <ChatInput
        placeholder="输入消息后按回车键发送"
        innerRef={(x) => {
          messageInput = x
        }}
        onPressEnter={handleSend}
      />
      <ChatButtonsContainer>
        <ChatAdditionButton type="paper-clip" />
        <Popover
          placement="topLeft"
          trigger="click"
          content={
            <EmojiTable>
              {emojis.map(emoji =>
                (<Emoji onClick={() => addEmoji(emoji.emoji)} role="img" aria-label={emoji.title}>
                  {emoji.emoji}
                </Emoji>),
              )}
            </EmojiTable>
          }
        >
          <ChatAdditionButton type="smile-o" />
        </Popover>
      </ChatButtonsContainer>
    </ChatInputContainer>
  )
}
ChatInputControls.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  chatRoomId: PropTypes.string.isRequired,
}
export default ChatInputControls
