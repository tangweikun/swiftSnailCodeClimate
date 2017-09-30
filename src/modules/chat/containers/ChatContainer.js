import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'
import ChatPage from './ChatPage'
// import ChatView from './ChatView'
import { ChatContainer as StyledChatContainer } from '../components/styled-components'

const mapStateToProps = state => ({
  patients: state.chat.patients,
})

const ChatContainer = ({ patients }) =>
  (<StyledChatContainer>
    {map(
      patients,
      (chatObj, patientId) => chatObj.status === 'OPEN' && <ChatPage patientId={patientId} />,
    )}
  </StyledChatContainer>)

ChatContainer.propTypes = {
  patients: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, null)(ChatContainer)
