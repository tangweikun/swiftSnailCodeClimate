import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'
import BloodPressure from '../components/blood-pressure.js'
import { updateSafeRange } from '../actions'

const mapStateToProps = state => ({
  activedPatient: state.core.activedPatient,
})

export default compose(
  graphql(updateSafeRange, { name: 'updateSafeRange' }),
  connect(mapStateToProps),
)(BloodPressure)
