import React, { PropTypes } from 'react'
import { graphql } from 'react-apollo'
import { Card } from 'antd'
import styled from 'styled-components'
import { queryMedicalHistory } from '../actions'
import * as medicalInfos from '../constants'

const queryVariables = {
  options: props => ({
    variables: {
      patientId: props.activedPatient.patientId,
    },
  }),
}

const BloodPressureLevelCard = (props) => {
  const { riskLevelMap, hypertensionLevelMap } = medicalInfos
  const boundDetails = props.data.me ? props.data.me.healthCareTeams[0].patient.boundDetails : {}
  const hypertensionLevel = boundDetails ? boundDetails.hypertensionLevel : ''
  const riskLevel = boundDetails ? boundDetails.riskLevel : ''
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Card title="高血压等级" bordered className="leftCard">
        <CardContent>{hypertensionLevelMap[hypertensionLevel]}</CardContent>
        <CardTime>{boundDetails ? '确认日期' : '' }</CardTime>
      </Card>
      <Card title="危险程度" bordered className="leftCard leftCardMid">
        <CardContent>{riskLevelMap[riskLevel]}</CardContent>
        <CardTime>{boundDetails ? '确认日期' : '' }</CardTime>
      </Card>
      <Card title="达标状态" bordered className="leftCard leftCardMid">{boundDetails ? '确认日期' : '' }</Card>
    </div>
  )
}

const CardContent = styled.div`
  font-size: 24px;
  color: #26344b;
  font-family: PingFangSC-Regular;
`
const CardTime = styled.div`
  font-size: 12px;
  color: #707070;
  font-family: PingFangSC-Regular;
`

BloodPressureLevelCard.propTypes = {
  data: PropTypes.object.isRequired,
//  medicalHistoryForPatient: PropTypes.object.isRequired,
}
export default graphql(queryMedicalHistory, queryVariables)(BloodPressureLevelCard)
