import { gql } from 'react-apollo'
import omit from 'lodash/omit'
import isEmpty from 'lodash/isEmpty'
import queryPatients from '../../patient/actions/patientList'
import queryPatientById from '../../patient/actions/profile'

export const mutationAddPatient = gql`
  mutation SignUpPatientAsHealthCareProfessional(
    $fullName: String!
    $mobile: PhoneNumber!
    $boundDetails: BoundDetailsInput!
  ) {
    signUpPatientAsHealthCareProfessional(
      fullName: $fullName,
      mobile: $mobile,
      boundDetails: $boundDetails
    ) {
      _id
      fullName
      avatar
      boundDetails {
        gender
        dateOfBirth
        hypertensionLevel
        isStarred
      }
    }
  }
`

export const mutationUpdatePatient = gql`
  mutation UpdatePatientAsHealthCareProfessional(
    $_id: ID!
    $fullName: String!
    $mobile: PhoneNumber!
    $boundDetails: BoundDetailsInput!
  ) {
    updatePatientAsHealthCareProfessional(
      _id: $_id,
      fullName: $fullName,
      mobile: $mobile,
      boundDetails: $boundDetails
    ) {
      _id
      fullName
      avatar
    }
  }
`

export const getInfoAndAddPatient = (props) => {
  const { form, closeModal, patientInfo } = props
  form.validateFields((err, fields) => {
    if (err) return

    const {
      fullName, mobile, dateOfBirth,
      permanentPlaceOfRecidence,
    } = fields
    const { code, prefix, addressDetail } = permanentPlaceOfRecidence
    const prefixs = prefix.split('/')
    const boundDetails = {
      ...omit(fields, ['fullName', 'mobile', 'dateOfBirth', 'avatar']),
      dateOfBirth: `${dateOfBirth.year}-${dateOfBirth.month}-${dateOfBirth.day}`,
      permanentPlaceOfRecidence: {
        province: prefixs[0],
        municipality: prefixs[1],
        area: prefixs[2],
        provinceCode: code[0],
        municipalityCode: code[1],
        areaCode: code[2],
        addressDetail,
      },
    }
    const variables = {
      fullName,
      mobile,
      boundDetails,
    }
    let mutate = props.mutationAddPatient
    let refetchQueries = [{ query: queryPatients }]
    if (!isEmpty(patientInfo)) {
      mutate = props.mutationUpdatePatient
      variables._id = patientInfo._id
      refetchQueries = [{
        query: queryPatientById,
        variables: {
          patientId: patientInfo._id,
        },
      }]
    }
    mutate({
      variables,
      refetchQueries,
    }).then(() => {
      closeModal()
    })
  })
}

export const isNumber = (value, expectLen) => {
  const reg = /^\d+$/
  let flag = false
  const isLength = !expectLen || (expectLen && (value && (value.length === expectLen)))
  if (value === '' || (!isNaN(value) && reg.test(value) && isLength)) {
    flag = true
  }
  return flag
}
