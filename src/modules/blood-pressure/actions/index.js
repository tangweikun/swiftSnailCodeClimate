import { gql } from 'react-apollo'

export const queryhistory = gql`
  query GetAllPatientsForBD($id: ID!, $after: Date) {
    me {
      _id
      ... on HealthCareProfessional {
        healthCareTeams {
          ... on HealthCareTeam {
            patient (id: $id) {
              fullName
              _id
              boundDetails {
                safeRangeSystolicBloodPressure
                safeRangeDiastolicBloodPressure
              }
              bloodPressureMeasurements (after: $after){
                systolic
                diastolic
                heartRate
                measuredAt
                measureState
              }
            }
          }
        }
      }
    }
  }`

export const querySafeBloodPressure = gql`
  query GetActivedPatientSafeBloodPressure ($patientId: ID!) {
    me {
      _id
      ... on HealthCareProfessional {
        healthCareTeams {
          patient(id: $patientId) {
            _id
            fullName
            boundDetails {
              safeRangeSystolicBloodPressure
              safeRangeDiastolicBloodPressure
            }
          }
        }
      }
    }
  }`
export const queryMeasureModule = gql`
  query GetMeasureModule {
    measureModule{
      _id
      morningAt
      eveningAt
      eveningMeasureTimes
      morningMeasureTimes
      type
    }
  }
`

export const updateSafeRange = gql `
    mutation updateSafeRange(
      $_id: ID!
      $boundDetails: BoundDetailsSafeRange!
    ) {
      updatePatientSafeBloodPressureRange(
        _id: $_id,
        boundDetails: $boundDetails
      ) {
          _id
          boundDetails {
            safeRangeSystolicBloodPressure
            safeRangeDiastolicBloodPressure
          }
        }
      }`

export const queryMedicalHistory = gql`
  query GetMedicalHistoryForBD($patientId: ID!){
    me {
      _id
      ... on HealthCareProfessional {
        healthCareTeams {
          ... on HealthCareTeam {
            patient (id: $patientId) {
              fullName
              _id
              boundDetails {
                riskLevel
                hypertensionLevel
              }
            }
          }
        }
      }
    }
  }
  `

export const updatePatient = (SafeRange, rangeValue, patientId, type) => {
  const boundDetails = {}
  if (type === 'systolic') {
    boundDetails.safeRangeSystolicBloodPressure = rangeValue.join(',')
  } else {
    boundDetails.safeRangeDiastolicBloodPressure = rangeValue.join(',')
  }
  const variables = {
    boundDetails,
  }
  const mutate = SafeRange
  variables._id = patientId
  mutate({ variables })
}
