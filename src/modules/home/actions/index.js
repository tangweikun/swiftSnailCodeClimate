import React from 'react'
import { queryOverproof } from './query.js'
import OverproofButtonGroup from '../containers/alertInput.js'


export const popupAddOperation = row => (dispatch) => {
  console.log(row)
  dispatch({
    type: 'MODAL_SHOW',
    isShowModal: true,
    width: 460,
    content: <OverproofButtonGroup patientInfo={row} />,
  })
}


export const updatePatient = (props) => {
  const { form, closeModal, patientInfo } = props
  console.log(patientInfo)
  form.validateFields((err, fields) => {
    if (err) return
    const { ResultTextarea } = fields
    const handleResult = ResultTextarea
    const state = true
    const variables = {
      handleResult,
      state,
    }
    const mutate = props.updateOverproofPatient
    variables._id = patientInfo._id
    const refetchQueries = [{
      query: queryOverproof,
    }]
    mutate({
      variables,
      refetchQueries,
    }).then(() => {
      closeModal()
    })
  })
}
