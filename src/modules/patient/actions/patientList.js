import { gql } from 'react-apollo'

const queryPatients = gql`
  query GetAllPatients {
    me {
      _id
      ... on HealthCareProfessional {
        healthCareTeams {
          ... on HealthCareTeam {
            patients {
              ... on Patient {
                _id
                fullName
                avatar
                boundDetails {
                  gender
                  dateOfBirth
                  hypertensionLevel
                  isStarred
                }
              }
            }
          }
        }
      }
    }
  }
`
export default queryPatients
