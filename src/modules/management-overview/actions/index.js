import { gql } from 'react-apollo'
import React from 'react'
import ListContaner from '../components/list-contaner.js'

export const alertUnmeasurePatientsList = (props, unmesureNums) => (dispatch) => {
  dispatch({
    type: 'MODAL_SHOW',
    isShowModal: true,
    title: <span style={{ color: '#666666' }}><span style={{ color: '#25354b', fontSize: '36px' }}>{unmesureNums}</span> 人{props.timeChoose}日内未测量</span>,
    width: 400,
    content: <ListContaner data={props.data} />,
  })
}

export const queryPatientsAndOverproof = gql`
  query GetAllPatientsAndOverproof($after: Date) {
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
                bloodPressureMeasurements (after: $after){
                  measuredAt
                }
              }
            }
            overproofPatients (after: $after){
              ... on OverproofPatient {
                _id
                patientId
                measuredAt
              }
            }
          }
        }
      }
    }
  }`
