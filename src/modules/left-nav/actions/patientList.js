
import React from 'react'
import AddPatient from '../../add-patient/containers'

export const popupAddPatient = () =>
  (dispatch) => {
    dispatch({
      type: 'MODAL_SHOW',
      title: '创建新患者',
      isShowModal: true,
      content: <AddPatient />,
      width: 1140,
    })
  }

export const setActivePatient = patientId => ({
  type: 'SET_ACTIVE_PATIENT',
  patientId,
})
