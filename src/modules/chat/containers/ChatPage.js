import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import ChatView from '../containers/ChatView'
import { queryMessages, messageAdded, subscriptionMessage } from '../actions'

const mapStateToProps = state => ({
  userId: state.core.userInfo._id,
})

const withData = graphql(queryMessages, {
  name: 'MessageList',
  options: props => ({
    variables: {
      patientId: props.patientId,
      before: new Date(),
    },
  }),
  props: props => ({
    subscribeToNewFeedback: () => props.MessageList.subscribeToMore({
      document: subscriptionMessage,
      updateQuery: (prev, { subscriptionData }) => {
        console.log('Prev: ', prev)
        if (!subscriptionData.data) {
          return prev
        }
        const newFeedbackItem = subscriptionData.data.chatMessageAdded
        console.log('New Feedback Item', newFeedbackItem)
        const newMessage = {
          sender: props.ownProps.userId === newFeedbackItem.sender.userId ? 'self' : 'others',
          text: newFeedbackItem.text,
          createdAt: newFeedbackItem.createdAt,
        }
        return props.ownProps.messageAdded(props.ownProps.patientId, newMessage)
      },
    }),
  }),
})

export default connect(mapStateToProps, { messageAdded })(withData(ChatView))
