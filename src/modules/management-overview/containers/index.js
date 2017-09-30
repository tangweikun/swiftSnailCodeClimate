import { connect } from 'react-redux'
import UnmeasurePatientsItem from '../components/unmeasure-patients-item.js'
import { alertUnmeasurePatientsList } from '../actions/index.js'

export default connect(null, {
  alertUnmeasurePatientsList,
})(UnmeasurePatientsItem)
