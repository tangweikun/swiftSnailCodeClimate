import React, { PropTypes } from 'react'
import { graphql } from 'react-apollo'
import { Button } from 'antd'
import get from 'lodash/get'
import moment from 'moment'
import { queryPatientsAndOverproof } from '../actions'

const UnmeasurePatientsItem = (props) => {
  const { data, alertUnmeasurePatientsList } = props
  const patientList = get(data, 'me.healthCareTeams[0].patients', [])
  const unmesureNums = patientList.filter((o) => {
    if (o.bloodPressureMeasurements.length > 0) {
      return false
    }
    return true
  }).length
  return (
    <div>
      <span style={{ display: 'block' }}><span style={{ fontSize: '32px' }}>{unmesureNums}</span>人</span>
      <div>{props.timeChoose}日内未测量</div>
      <div><Button onClick={() => alertUnmeasurePatientsList(props, unmesureNums)}>查看</Button></div>
    </div>
  )
}


UnmeasurePatientsItem.propTypes = {
  timeChoose: PropTypes.string.isRequired,
  alertUnmeasurePatientsList: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}
export default graphql(queryPatientsAndOverproof, {
  options: props => ({
    variables: {
      after: moment().subtract(props.timeChoose, 'days'),
    },
  }),
})(UnmeasurePatientsItem)
