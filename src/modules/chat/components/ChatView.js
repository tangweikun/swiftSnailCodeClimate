import React, { PropTypes } from 'react'
import { ChatBubble } from '../components/ChatBubble'
import ChatInput from '../containers/ChatInput'
// import ChatMessage from '../containers/ChatMessage'
import { ChatViewPanel, ChatViewHeader, MessageWall, CloseIcon } from './styled-components'

const ChatView = ({ messages, chatRoomName, chatRoomId, closeChatWindow, patientId, data }) =>
  (<ChatViewPanel>
    <ChatViewHeader>
      <span>
        {chatRoomName}
      </span>
      <CloseIcon type="close" onClick={() => closeChatWindow(patientId)} />
    </ChatViewHeader>
    <MessageWall id={`message-wall-${patientId}`}>
      {messages.map(message =>
        <ChatBubble sender={message.sender} avatar={message.avatar} content={message.text} />,
      )}
    </MessageWall>
    <ChatInput chatRoomId={chatRoomId} patientId={patientId} data={data} />
  </ChatViewPanel>)

ChatView.propTypes = {
  messages: PropTypes.array.isRequired,
  chatRoomName: PropTypes.string.isRequired,
  chatRoomId: PropTypes.string.isRequired,
  closeChatWindow: PropTypes.func.isRequired,
  patientId: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

export default ChatView
