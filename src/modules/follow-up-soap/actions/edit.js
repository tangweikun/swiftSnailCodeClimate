import React from 'react'
import EditModal from '../containers/EditModal'

export const popupEditSoap = soap => (dispatch) => {
  dispatch({
    type: 'MODAL_SHOW',
    title: 'SOAP记录',
    style: {
      height: '740px',
    },
    isShowModal: true,
    content: <EditModal soap={soap} />,
    width: 1030,
  })
}
