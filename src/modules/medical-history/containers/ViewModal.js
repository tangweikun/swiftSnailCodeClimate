import { graphql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import ViewModal from '../components/ViewModal'
import { queryMedicalHistory } from '../actions/editModal'
import { popupEditMedicalHistory } from '../actions'
import { withLoading } from '../../../common/withLoading'

const mapStateToProps = state => ({
  patientId: state.core.activedPatient.patientId,
})

export default compose(
  connect(mapStateToProps, { popupEditMedicalHistory }),
  graphql(queryMedicalHistory, {
    variables: props => ({
      patientId: props.patientId,
    }),
  }),
)(withLoading(ViewModal))
