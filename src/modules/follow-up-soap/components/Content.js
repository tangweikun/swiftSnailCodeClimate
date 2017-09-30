import React, { PropTypes } from 'react'
import { Icon } from 'antd'
import {
  EmptyScreen as StyledEmptyScreen,
  Screen,
  ButtonWithRadius,
  ButtonWithIcon,
  ContentLabel,
  Content,
  DashedLine,
} from './styled-components'

export const EmptyContent = ({ onClickAddSoap }) => (
  <StyledEmptyScreen>
    <h2>尚未有随访记录</h2>
    <ButtonWithRadius onClick={onClickAddSoap}>
      <ButtonWithIcon>
        <Icon type="file-add" />
        <span>SOAP记录</span>
      </ButtonWithIcon>
    </ButtonWithRadius>
  </StyledEmptyScreen>
)

EmptyContent.propTypes = {
  onClickAddSoap: PropTypes.func.isRequired,
}

export const SoapContent = ({ soap }) => (
  <Screen>
    <ContentLabel>Subjective</ContentLabel>
    <Content>{soap.subjective}</Content>
    <DashedLine />
    <ContentLabel>Objective</ContentLabel>
    <Content>{soap.objective}</Content>
    <DashedLine />
    <ContentLabel>Assessment</ContentLabel>
    <Content>{soap.assessment}</Content>
    <DashedLine />
    <ContentLabel>Plan</ContentLabel>
    <Content>{soap.plan}</Content>
  </Screen>
)

SoapContent.propTypes = {
  soap: PropTypes.object.isRequired,
}
