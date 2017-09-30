import React from 'react'
import isEmpty from 'lodash/isEmpty'
import EditModal from '../containers/EditModal'
import { queryMedicalHistory } from './editModal'

export const popupEditCaseRecord = caseRecord => (dispatch) => {
  dispatch({
    type: 'MODAL_SHOW',
    title: '编辑病历数据',
    style: {
      top: 20,
      bottom: 20,
      height: 'calc(100vh - 200px)',
      overflowY: 'hidden',
    },
    isShowModal: true,
    content: <EditModal caseRecord={caseRecord} />,
    width: 600,
  })
}

export const updateMedicalHistory = (props) => {
  const {
    form,
    patientId,
    medicalHistory,
    mutationAddMedicalHistory,
    closeModal,
    mutationUpdateMedicalHistory,
  } = props

  form.validateFields((err, fields) => {
    // console.log(err, fields)
    if (err) return
    const {
      courseOfHypertension,
      highestBloodPressureInClinic,
      hypertensionLevel,
      riskLevel,
      riskFactors,
      targetOrganDamage,
      withClinicalIllness,
      antihypertensiveDrugsContraindications,
      otherMedicalHistory,
      allergyHistory,
      familyHistory,
    } = fields
    const transforFamilyHistory = {}
    if (!isEmpty(familyHistory)) {
      Object.keys(familyHistory).forEach((property) => {
        if (!isEmpty(familyHistory[property]) && familyHistory[property].isFlag) {
          const tempObj = {}
          tempObj.historyCategory = familyHistory[property].options
          tempObj.comments = familyHistory[property].comments
          transforFamilyHistory[property] = tempObj
        }
      })
    }
    const optionDetails = {
      riskFactors,
      targetOrganDamage,
      withClinicalIllness,
      antihypertensiveDrugsContraindications,
      otherMedicalHistory,
      allergyHistory,
      familyHistory: transforFamilyHistory,
    }
    let variables = {
      patientId,
      courseOfHypertension,
      highestBloodPressureInClinic,
      conclusion: {
        hypertensionLevel,
        riskLevel,
      },
      optionDetails,
    }
    let mutate = mutationAddMedicalHistory
    if (!isEmpty(medicalHistory)) {
      variables = {
        medicalHistoryId: medicalHistory._id,
        batch: {
          courseOfHypertension,
          highestBloodPressureInClinic,
          conclusion: {
            hypertensionLevel,
            riskLevel,
          },
          optionDetails,
        },
      }
      mutate = mutationUpdateMedicalHistory
    }
    const refetchQueries = [
      {
        query: queryMedicalHistory,
        variables: {
          patientId,
        },
      },
    ]
    mutate({
      variables,
      refetchQueries,
    })
      .then(() => {
        closeModal()
      })
      .catch((e) => {
        console.log(e)
      })
  })
}
