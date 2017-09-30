import React, { PropTypes } from 'react'
import { Button } from 'antd'
import { StyledNoDataPage, StyledNoDataInfo } from './styled-components'

const NoDataPage = ({ popupEditMedicalHistory }) => (<StyledNoDataPage>
  <StyledNoDataInfo>患者尚未有病史</StyledNoDataInfo>
  <Button
    type="primary"
    icon="file-add"
    onClick={() => popupEditMedicalHistory()}
  >新病史</Button>
</StyledNoDataPage>)

NoDataPage.propTypes = {
  popupEditMedicalHistory: PropTypes.func,
}

export default NoDataPage
