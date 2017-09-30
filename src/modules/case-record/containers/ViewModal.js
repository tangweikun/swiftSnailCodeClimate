import { graphql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import ViewModal from '../components/ViewModal'
import { queryCaseRecords } from '../actions/editModal'
import { popupEditCaseRecord } from '../actions'
import { withLoading } from '../../../common/withLoading'

const mapStateToProps = state => ({
  patientId: state.core.activedPatient.patientId,
})

export default compose(
  connect(mapStateToProps, { popupEditCaseRecord }),
  graphql(queryCaseRecords, {
    variables: props => ({
      patientId: props.patientId,
    }),
  }),
)(withLoading(ViewModal))
