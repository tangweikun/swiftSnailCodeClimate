import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import isEqual from 'lodash/isEqual'
import IncomingMessageButtonComponent from '../components/IncomingMessageButton'
import { queryAllUnreadCount, getAllUnreadCount } from '../actions/chatView'

// const fakeMessageCount = 10

const mapStateToProps = state => ({
  count: state.chat.allUnreadCount,
})

class IncomingMessageButton extends Component {
  static propTypes = {
    getAllUnreadCount: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    const { me, loading } = nextProps.data
    if (!loading && !isEqual(nextProps.data.me, this.props.data.me) && me) {
      nextProps.getAllUnreadCount(me)
    }
  }

  render() {
    return <IncomingMessageButtonComponent {...this.props} />
  }
}

export default connect(
  mapStateToProps,
  { getAllUnreadCount },
)(graphql(queryAllUnreadCount)(IncomingMessageButton))
