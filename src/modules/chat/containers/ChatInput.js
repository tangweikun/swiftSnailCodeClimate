import { graphql } from 'react-apollo'
import ChatInputComponent from '../components/ChatInput'
import { insertMessages } from '../actions'

const ChatInput = graphql(insertMessages, {
  props: ({ mutate }) => ({
    sendMessage({ chatRoomId, text }) {
      return mutate({
        variables: {
          chatRoomId,
          text,
        },
      })
    },
  }),
})(ChatInputComponent)

export default ChatInput
