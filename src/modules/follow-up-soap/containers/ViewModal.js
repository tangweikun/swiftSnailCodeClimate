import { compose, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import ViewModal from '../components/ViewModal'
import { getSoapsForPatient, popupEditSoap } from '../actions'
import { withLoading } from '../../../common/withLoading'

const mapStateToProps = state => ({
  patientId: state.core.activedPatient.patientId,
})

export default compose(
  connect(mapStateToProps, { popupEditSoap }),
  graphql(getSoapsForPatient, {
    variables: props => ({
      patientId: props.patientId,
    }),
  }),
)(withLoading(ViewModal))
