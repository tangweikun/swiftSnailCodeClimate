import { InputNumber, Slider } from 'antd'
import React, { PropTypes } from 'react'
import { graphql } from 'react-apollo'
import styled from 'styled-components'
import { updatePatient, querySafeBloodPressure } from '../actions'

const queryVariables = {
  options: props => ({
    variables: {
      patientId: props.activedPatient.patientId,
    },
  }),
}

class SafeBloodPressure extends React.Component {
  state = {
    Systolic: [80, 160],
    Diastolic: [60, 110],
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.data, this.props.data)
    if (!nextProps.data.me) return
    if (this.props.data.me === nextProps.data.me) return
    const boundDetails = nextProps.data.me.healthCareTeams[0].patient.boundDetails
    if (boundDetails) {
      const heigh = boundDetails.safeRangeSystolicBloodPressure
      const low = boundDetails.safeRangeDiastolicBloodPressure
      if (heigh && heigh !== this.state.Systolic.join(',')) {
        const systolic = heigh.split(',')
        this.setStateValue([Number(systolic[0]), Number(systolic[1])], 'systolic')
      }
      if (low && low !== this.state.Diastolic.join(',')) {
        const diastolic = low.split(',')
        this.setStateValue([Number(diastolic[0]), Number(diastolic[1])], 'diastolic')
      }
    }
  }
  setStateValue = (value, type) => {
    if (type === 'systolic') {
      this.setState({
        Systolic: value,
      })
    } else if (type === 'diastolic') {
      this.setState({
        Diastolic: value,
      })
    }
  }
  render() {
    const { activedPatient, updateSafeRange } = this.props
    const onChange = (value, buttontype, IsSystolic) => {
      let changeValue = []
      if (buttontype === 'LowNums') {
        changeValue = IsSystolic ?
        [value, this.state.Systolic[1]] : [value, this.state.Diastolic[1]]
      } else if (buttontype === 'HeighNums') {
        changeValue = IsSystolic ?
        [this.state.Systolic[0], value] : [this.state.Diastolic[0], value]
      } else {
        changeValue = value
      }
      if (IsSystolic) {
        updatePatient(updateSafeRange, changeValue, activedPatient.patientId, 'systolic')
      } else {
        updatePatient(updateSafeRange, changeValue, activedPatient.patientId)
      }
    }
    return (
      <div style={{ marginRight: '16px' }}>
        <SetNumDiv>
          <InputNumber
            min={60}
            max={200}
            style={{ width: '60px', marginLeft: '16px' }}
            value={this.state.Systolic[0]}
            onChange={value => onChange(value, 'LowNums', true)}
          />
          <div>设定高压范围</div>
          <InputNumber
            min={60}
            max={200}
            style={{ width: '60px', float: 'right', marginLeft: '16px' }}
            value={this.state.Systolic[1]}
            onChange={value => onChange(value, 'HeighNums', true)}
          />
        </SetNumDiv>
        <div>
          <Slider
            min={60}
            max={200}
            range
            onChange={value => onChange(value, 'Slider', true)}
            value={this.state.Systolic}
          />
        </div>
        <SetNumDiv>
          <InputNumber
            min={40}
            max={120}
            style={{ width: '60px', marginLeft: '16px' }}
            value={this.state.Diastolic[0]}
            onChange={value => onChange(value, 'LowNums', false)}
          />
          <span>设定低压范围</span>
          <InputNumber
            min={40}
            max={120}
            style={{ width: '60px', marginLeft: '16px' }}
            value={this.state.Diastolic[1]}
            onChange={value => onChange(value, 'HeighNums', false)}
          />
        </SetNumDiv>
        <div>
          <Slider
            min={40}
            max={120}
            range
            onChange={value => onChange(value, 'Slider', false)}
            value={this.state.Diastolic}
          />
        </div>
      </div>
    )
  }
}
const SetNumDiv = styled.div`
  color: #535353;
  display: flex;
  justify-content: space-between;
`
SafeBloodPressure.propTypes = {
  activedPatient: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  updateSafeRange: PropTypes.func.isRequired,
}
export default graphql(querySafeBloodPressure, queryVariables)(SafeBloodPressure)
