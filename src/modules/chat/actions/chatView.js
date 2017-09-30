import { gql } from 'react-apollo'
import get from 'lodash/get'
import isArray from 'lodash/isArray'
import sumBy from 'lodash/sumBy'

export const queryMessages = gql`
  query Messages($patientId: ID!) {
    patient(patientId: $patientId){
      fullName
      # avator
      boundDetails {
        chatRoom {
          _id
          messages{
            ... on TextMessage{
              sender {
                _id
              }
              createdAt
              text
            }
          }
        }
      }
    }
  }
`

export const queryLatestMessages = gql`
  query LatestMessage {
    me {
      _id
      fullName
      ... on HealthCareProfessional {
        healthCareTeams {
          ... on HealthCareTeam {
            patients {
              ... on Patient {
                fullName
                avatar
                boundDetails{
                  chatRoom {
                    _id
                    latestMessage {
                      ... on TextMessage {
                        sender {
                          _id
                          __typename
                        }
                        text
                        createdAt
                      }
                    }
                    unreadMessageCount
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const queryAllUnreadCount = gql`
  query AllLatestMessageUnreadCount {
    me {
      _id
      ... on HealthCareProfessional {
        healthCareTeams {
          ... on HealthCareTeam {
            patients {
              ... on Patient {
                _id
                boundDetails{
                  chatRoom {
                    _id
                    unreadMessageCount
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const subscriptionMessage = gql`
  subscription chatMessageAdded {
    chatMessageAdded {
      _id
      text
      sender {
        userId
      }
      createdAt
    }
  }
`

export const openChatWindow = patientId => ({
  type: 'OPEN_CHAT_WINDOW',
  patientId,
})

export const updateChatRoom = args => ({
  type: 'UPDATE_CHAT_ROOM',
  ...args,
})

export const closeChatWindow = patientId => ({
  type: 'CLOSE_CHAT_WINDOW',
  patientId,
})

export const openLatestMessageList = data => (dispatch) => {
  const patients = []
  const teams = get(data, 'healthCareTeams')
  teams.forEach((team) => {
    const patientList = get(team, 'patients')
    if (isArray(patientList)) {
      patients.push(...patientList)
    }
  })
  // const patients = get(data, 'healthCareTeams[0].patients')
  const latestMessageList = patients.map(patient => ({
    name: get(patient, 'fullName'),
    avatar: get(patient, 'avatar'),
    text: get(patient, 'boundDetails.chatRoom.latestMessage.text'),
    createdAt: get(patient, 'boundDetails.chatRoom.latestMessage.createdAt'),
    userType: get(patient, 'boundDetails.chatRoom.latestMessage.sender.__typename'),
    unreadMessageCount: get(patient, 'boundDetails.chatRoom.unreadMessageCount'),
  }))
  dispatch({
    type: 'SET_LATEST_MESSAGE_LIST',
    latestMessageList,
  })
}

export const getAllUnreadCount = data => (dispatch) => {
  let allUnreadCount = 0
  const teams = get(data, 'healthCareTeams')
  teams.forEach((team) => {
    allUnreadCount += sumBy(get(team, 'patients'), 'boundDetails.chatRoom.unreadMessageCount')
  })
  dispatch({
    type: 'SET_ALL_UNREAD_COUNT',
    allUnreadCount,
  })
}

export const messageAdded = (patientId, newMessage) => ({
  type: 'MESSAGE_ADDED',
  patientId,
  messages: newMessage,
})
