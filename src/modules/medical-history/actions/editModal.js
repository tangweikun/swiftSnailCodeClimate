import isEmpty from 'lodash/isEmpty'
import { gql } from 'react-apollo'

const isBetween = (value, min, max) => value >= min && value <= max

const getValue = value => !isEmpty(value)

const getHypertensionLevel = (highestBloodPressureInClinic = {}) => {
  const { systolic, diastolic } = highestBloodPressureInClinic
  let hypertensionLevel = 'LEVEL_1'
  if (systolic > 180 || diastolic > 110) {
    hypertensionLevel = 'LEVEL_3'
  } else if (isBetween(systolic, 160, 179) || isBetween(diastolic, 100, 109)) {
    hypertensionLevel = 'LEVEL_2'
  } else if (isBetween(systolic, 140, 159) || isBetween(diastolic, 90, 99)) {
    hypertensionLevel = 'LEVEL_1'
  }
  return hypertensionLevel
}

const isHighBPInClinic = ({ systolic, diastolic }) => (systolic > 180 || diastolic > 110)
const isMidBPInClinic = ({ systolic, diastolic }) =>
  (isBetween(systolic, 160, 179) || isBetween(diastolic, 100, 109))

const isLow = ({ systolic, diastolic }) =>
    (isBetween(systolic, 140, 159) || isBetween(diastolic, 90, 99))

const isExtremelyHigh = ({
  withClinicalIllness, highestBloodPressureInClinic, riskFactors,
}) => {
  const hasClinicalIllness = getValue(withClinicalIllness)
  const hasRiskFactors = getValue(riskFactors)
  const hasHighBPInClinic = isHighBPInClinic(highestBloodPressureInClinic)
  return hasClinicalIllness || (hasRiskFactors && hasHighBPInClinic)
}

const isHigh = ({
  riskFactors, highestBloodPressureInClinic, targetOrganDamage,
}) => {
  const moreThen3RiskFactors = !isEmpty(riskFactors) && (riskFactors.length >= 3)
  const hasTargetOrganDamage = getValue(targetOrganDamage)
  const hasHighBPInClinic = isHighBPInClinic(highestBloodPressureInClinic)
  return hasHighBPInClinic || ((moreThen3RiskFactors || hasTargetOrganDamage) && !hasHighBPInClinic)
}

const isMid = ({
  riskFactors, highestBloodPressureInClinic,
}) => {
  const oneOrTwoRiskFactors = !isEmpty(riskFactors) && isBetween(riskFactors.length, 1, 2)
  const hasMidBPInClinic = isMidBPInClinic(highestBloodPressureInClinic)
  const hasHighBPInClinic = isHighBPInClinic(highestBloodPressureInClinic)
  return hasMidBPInClinic || (oneOrTwoRiskFactors && !hasHighBPInClinic)
}

const getPropertyValue = (value, type, currentType, getFieldValue) =>
  type === currentType ? value : getFieldValue(type)

export const handlecheckChange = (value, type, props) => {
  const { form: { getFieldValue, setFieldsValue } } = props
  const riskFactors = getPropertyValue(value, 'riskFactors', type, getFieldValue)
  const targetOrganDamage = getPropertyValue(value, 'targetOrganDamage', type, getFieldValue)
  const withClinicalIllness = getPropertyValue(value, 'withClinicalIllness', type, getFieldValue)
  const systolic = getPropertyValue(value, 'highestBloodPressureInClinic.systolic', type, getFieldValue)
  const diastolic = getPropertyValue(value, 'highestBloodPressureInClinic.diastolic', type, getFieldValue)
  const highestBloodPressureInClinic = { systolic, diastolic }
  let riskLevel = 'LOW'
  if (isExtremelyHigh({ withClinicalIllness, highestBloodPressureInClinic, riskFactors })) {
    riskLevel = 'EXTREMELY_HIGH'
  } else if (isHigh({ riskFactors, highestBloodPressureInClinic, targetOrganDamage })) {
    riskLevel = 'HIGH'
  } else if (isMid({ riskFactors, highestBloodPressureInClinic })) {
    riskLevel = 'MID'
  } else if (isLow(highestBloodPressureInClinic)) {
    riskLevel = 'LOW'
  }
  const currentRiskLevel = getFieldValue('riskLevel')
  if (currentRiskLevel !== riskLevel) {
    setFieldsValue({
      riskLevel,
    })
  }
  if (/highestBloodPressureInClinic/.test(type)) {
    const currentHyperLevel = getFieldValue('hypertensionLevel')
    const hypertensionLevel = getHypertensionLevel(highestBloodPressureInClinic)
    if (currentHyperLevel !== hypertensionLevel) {
      setFieldsValue({
        hypertensionLevel,
      })
    }
  }
}

export const getCheckboxConfig = () => [
  { type: 'riskFactors' },
  { type: 'targetOrganDamage' },
  { type: 'withClinicalIllness' },
  { type: 'antihypertensiveDrugsContraindications' },
]

export const mutationAddMedicalHistory = gql`
  mutation AddMedicalHistory(
    $patientId: ID!
    $courseOfHypertension: Day!
    $highestBloodPressureInClinic: HighestBloodPressureInClinicInput!
    $optionDetails: OptionDetailsInput
    $conclusion: ConclusionInput!
  ) {
    addMedicalHistory(
      patientId: $patientId,
      courseOfHypertension: $courseOfHypertension,
      highestBloodPressureInClinic: $highestBloodPressureInClinic,
      optionDetails: $optionDetails,
      conclusion: $conclusion,
    ) {
      _id
      courseOfHypertension
    }
  }
`
export const mutationUpdateMedicalHistory = gql`
  mutation UpdateMedicalHistory(
    $medicalHistoryId: ID!
    $batch: BatchInput!
  ) {
    updateMedicalHistory(
      medicalHistoryId: $medicalHistoryId,
      batch: $batch,
    )
  }
`
export const queryMedicalHistory = gql`
  query GetMedicalHistory(
    $patientId: ID!
  ){
    medicalHistoryForPatient(patientId: $patientId) {
      _id
      courseOfHypertension
      highestBloodPressureInClinic {
        systolic
        diastolic
      }
      conclusion {
        riskLevel
        hypertensionLevel
      }
      riskFactors
      targetOrganDamage
      withClinicalIllness
      antihypertensiveDrugsContraindications
      otherMedicalHistory
      allergyHistory
      familyHistory {
        mother {
          comments
          historyCategory
        }
        father {
          comments
          historyCategory
        }
        child {
          comments
          historyCategory
        }
        sibling {
          comments
          historyCategory
        }
      }
    }
  }
`
