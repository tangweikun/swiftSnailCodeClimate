import React from 'react'
import get from 'lodash/get'
import ListItemHomeView from './list-item.js'

const ListContaner = (props) => {
  const patientList = get(props, 'data.me.healthCareTeams[0].patients', [])
  const unmesureNums = patientList.filter((o) => {
    if (o.bloodPressureMeasurements.length > 0) {
      return false
    }
    return true
  })
  return (
    <div>
      {
        unmesureNums.map(patient =>
        (<ListItemHomeView
          key={patient._id}
          patient={patient}
        />),
      )}
    </div>
  )
}

export default ListContaner
