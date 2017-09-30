import { gql } from 'react-apollo'

export const insertMessages = gql`
  mutation SendTextChatMessage($chatRoomId: ID!, $text: String!) {
    sendTextChatMessage(chatRoomId: $chatRoomId, text: $text) {
      text
    }
  }
`
