import { gql } from 'react-apollo'

export const queryUser = gql`
  query QueryUser {
    me {
      fullName,
      mobile,
      _id,
      ... on HealthCareProfessional {
        role
      }
    }
  }
`

export const getUserInfo = userInfo =>
  (dispatch) => {
    dispatch({
      type: 'GET_USER_INFO',
      userInfo,
    })
  }
