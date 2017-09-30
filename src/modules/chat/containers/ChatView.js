import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import isEqual from 'lodash/isEqual'
import get from 'lodash/get'
import ChatViewComponent from '../components/ChatView'
import { queryMessages, updateChatRoom, closeChatWindow } from '../actions'

const mapStateToProps = (state, props) => ({
  messages: state.chat.patients[props.patientId].messages,
  chatRoomName: state.chat.patients[props.patientId].chatRoomName,
  chatRoomId: state.chat.patients[props.patientId].chatRoomId,
  userId: state.core.userInfo._id,
})

class ChatView extends Component {
  static propTypes = {
    updateChatRoom: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    patientId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    subscribeToNewFeedback: PropTypes.func.isRequired,
  }

  static scrollToBottom = (patientId) => {
    const messageWallDiv = document.getElementById(`message-wall-${patientId}`)
    messageWallDiv.scrollTop = messageWallDiv.scrollHeight
  }

  componentWillMount() {
    this.props.subscribeToNewFeedback()
  }

  componentDidMount() {
    if (this.props.patientId) {
      ChatView.scrollToBottom(this.props.patientId)
    }
  }


  componentWillReceiveProps(nextProps) {
    const { patient, loading } = nextProps.data

    if (!loading && !isEqual(patient, this.props.data.patient) && patient) {
      const patientId = this.props.patientId
      const chatRoomId = get(patient, 'boundDetails.chatRoom._id')
      let messages = get(patient, 'boundDetails.chatRoom.messages')
      const chatRoomName = get(patient, 'fullName')
      messages = messages.map(message => ({
        ...message,
        sender: this.props.userId === message.sender._id ? 'self' : 'others',
      }))
      nextProps.updateChatRoom({ patientId, messages, chatRoomId, chatRoomName })
    }
  }

  componentDidUpdate() {
    if (this.props.patientId) {
      ChatView.scrollToBottom(this.props.patientId)
    }
  }

  render() {
    return <ChatViewComponent {...this.props} />
  }
}

export default connect(mapStateToProps, { updateChatRoom, closeChatWindow })(
  graphql(queryMessages, {
    // name: 'MessageList',
    options: props => ({
      variables: {
        patientId: props.patientId,
        before: new Date(),
      },
    }),
  })(ChatView),
)
