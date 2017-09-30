import { gql } from 'react-apollo'

import React from 'react'
import AddPatient from '../../add-patient/containers'

export const popupEditPatient = patientInfo =>
  (dispatch) => {
    const { fullName } = patientInfo
    dispatch({
      type: 'MODAL_SHOW',
      title: `编辑${fullName}`,
      isShowModal: true,
      maskClosable: false,
      content: <AddPatient patientInfo={patientInfo} />,
      width: 1140,
    })
  }


export const openChatRoom = () =>
  (dispatch, getState) => {
    const { patientId } = getState().core.activedPatient
    dispatch({
      type: 'OPEN_CHAT_WINDOW',
      patientId,
    })
  }


const queryPatientById = gql`
  query GetActivedPatientProfile ($patientId: ID!) {
    me {
      _id
      ... on HealthCareProfessional {
        healthCareTeams {
          patient(id: $patientId) {
            _id
            fullName
            avatar
            mobile
            boundDetails {
              gender
              dateOfBirth
              height
              weight
              HISNumber
              healthInsuranceType
              averageMonthlyFamilyIncome
              highestEducationLevel
              isStarred
              employmentStatus
              emergencyContact {
                fullName
                mobile
                relationshipToPatient
              }
              permanentPlaceOfRecidence {
                province
                municipality
                area
                provinceCode
                municipalityCode
                areaCode
                addressDetail
              }
              measurementDeviceStatus
            }
          }
        }
      }
    }
  }
`
export default queryPatientById
