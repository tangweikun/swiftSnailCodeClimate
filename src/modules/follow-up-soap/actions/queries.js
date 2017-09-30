import { gql } from 'react-apollo'

export const getSoapsForPatient = gql`
  query GetSoapsForPatient($patientId: ID!) {
    SoapsForPatient(patientId: $patientId) {
      _id
      overdue
      subjective
      objective
      assessment
      plan
      severity {
        medicine
        monitor
        diet
        solution
        sports
        healthAdjustment
        reduceRisk
      }
      phoneFollowUpAt
      createdAt
      createdBy {
        fullName
        role
      }
    }
  }
`

export const getSoapCorpus = gql`
  query corpus {
    soapCorpus {
      _id
      category
      segment
      dependence
      value
      createdBy {
        _id
      }
      createdAt
    }
  }
`
