import React, { PropTypes } from 'react'
import RightMeasurementHistoryTable from './right-measurement-history-table.js'
import LeftMeasurementHistoryTable from './left-measurement-history-table.js'
import BloodPressureLevelCard from './patient-bloodpressure-level-card.js'
import './blood-pressure-table.css'


const BloodPressure = (props) => {
  const { activedPatient } = props
  const patient = activedPatient.patientId
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '65%', marginRight: '30px', flexShrink: 0 }}>
          <div>
            <BloodPressureLevelCard
              {...props}
            />
            <LeftMeasurementHistoryTable
              patientId={patient}
            />
          </div>
        </div>
        <div style={{ width: '35%', paddingRight: '30px', flexShrink: 0 }}>
          <RightMeasurementHistoryTable
            {...props}
          />
        </div>
      </div>
    </div>
  )
}
BloodPressure.propTypes = {
  activedPatient: PropTypes.object.isRequired,
}

export default BloodPressure
