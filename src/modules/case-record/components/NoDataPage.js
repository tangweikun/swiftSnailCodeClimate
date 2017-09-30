import React, { PropTypes } from 'react'
import { Button } from 'antd'
import {
  StyledNoDataBlank,
  StyledNoDataPage,
  StyledNoDataInfo,
  StyledNoDataPageInside,
} from './styled-components'

const NoDataPage = ({ popupEditCaseRecord }) => (
  <StyledNoDataPage>
    <StyledNoDataBlank />
    <StyledNoDataPageInside>
      <StyledNoDataInfo>尚未有电子病历</StyledNoDataInfo>
      <Button type="primary" icon="file-add" onClick={popupEditCaseRecord}>
        新病历
      </Button>
    </StyledNoDataPageInside>
  </StyledNoDataPage>
)

NoDataPage.propTypes = {
  popupEditCaseRecord: PropTypes.func,
}

export default NoDataPage
