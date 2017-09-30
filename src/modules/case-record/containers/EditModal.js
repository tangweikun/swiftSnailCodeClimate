import { graphql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import EditModal from '../components/EditModal'
import { mutationAddCaseRecord, mutationUpdateMedicalHistory } from '../actions/editModal'
import { closeModal } from '../../modal/reducers'

const mapStateToProps = state => ({
  patientId: state.core.activedPatient.patientId,
})
export default compose(
  graphql(mutationAddCaseRecord, { name: 'mutationAddCaseRecord' }),
  graphql(mutationUpdateMedicalHistory, { name: 'mutationUpdateMedicalHistory' }),
  connect(mapStateToProps, { closeModal }),
)(EditModal)
