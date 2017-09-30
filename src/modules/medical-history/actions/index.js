import React from 'react'
import isEmpty from 'lodash/isEmpty'
import EditModal from '../containers/EditModal'
import { queryMedicalHistory } from './editModal'

export const popupEditMedicalHistory = medicalHistory =>
  (dispatch) => {
    dispatch({
      type: 'MODAL_SHOW',
      title: '编辑病史数据',
      style: {
        top: 20,
        bottom: 20,
        height: 'calc(100vh - 40px)',
        overflowY: 'hidden',
      },
      isShowModal: true,
      content: <EditModal medicalHistory={medicalHistory} />,
      width: 1030,
    })
  }

export const updateMedicalHistory = (props) => {
  const { form, patientId, medicalHistory,
    mutationAddMedicalHistory, closeModal,
    mutationUpdateMedicalHistory,
  } = props

  form.validateFields((err, fields) => {
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
    const { year, month } = courseOfHypertension
    const formatCOH = `${year}-${month}-01`
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
      courseOfHypertension: formatCOH,
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
          courseOfHypertension: formatCOH,
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
    const refetchQueries = [{
      query: queryMedicalHistory,
      variables: {
        patientId,
      },
    }]
    mutate({
      variables,
      refetchQueries,
    }).then(() => {
      closeModal()
    }).catch((e) => {
      console.log(e)
    })
  })
}
