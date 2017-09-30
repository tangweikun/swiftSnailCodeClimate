import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import isEqual from 'lodash/isEqual'
import ChatMessageComponent from '../components/ChatMessage'
import { queryLatestMessages, openLatestMessageList, openChatWindow } from '../actions/chatView'

const mapStateToProps = state => ({
  latestMessageList: state.chat.latestMessageList,
})

class ChatMessage extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    openLatestMessageList: PropTypes.func.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    const { me, loading } = nextProps.data
    if (!loading && !isEqual(nextProps.data.me, this.props.data.me) && me) {
      nextProps.openLatestMessageList(me)
    }
  }

  render() {
    return <ChatMessageComponent {...this.props} />
  }
}

export default connect(mapStateToProps, {
  openLatestMessageList,
  openChatWindow,
})(graphql(queryLatestMessages)(ChatMessage))
