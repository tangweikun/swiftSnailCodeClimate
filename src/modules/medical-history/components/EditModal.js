import React, { PropTypes } from 'react'
import { Form, Button } from 'antd'
import get from 'lodash/get'
import styled from 'styled-components'
import { otherMedicalHistory, allergyHistory,
  riskLevelMap, hypertensionLevelMap,
} from '../constants'
import {
  RowItem, RowItemLabel,
  StyledInput, StyledEditModal,
  StyledConclusion,
} from './styled-components'

import CourseOfHypertension from './CourseOfHypertension'
import HighestBloodPressureInClinic from './HighestBloodPressureInClinic'
import CheckboxGroup from './CheckboxGroup'
import FamilyHistory from './FamilyHistory'
import { updateMedicalHistory } from '../actions'
import { getCheckboxConfig, handlecheckChange } from '../actions/editModal'

const FormItem = Form.Item

const EditModal = (props) => {
  const { medicalHistory = {}, closeModal } = props
  const { getFieldDecorator, setFieldsValue, getFieldValue } = props.form
  const defaultFunc = { getFieldDecorator, setFieldsValue, getFieldValue }
  return (<StyledEditModal>
    <Form>
      <CourseOfHypertension
        {...defaultFunc}
        courseOfHypertension={medicalHistory.courseOfHypertension}
      />
      <HighestBloodPressureInClinic {...props} />
      {
        getCheckboxConfig().map(checkboxItem => (<CheckboxGroup
          {...defaultFunc}
          key={checkboxItem.type}
          type={checkboxItem.type}
          initialValue={medicalHistory[checkboxItem.type]}
          onChange={value => handlecheckChange(value, checkboxItem.type, props)}
        />))
      }
      <RowItem isInline>
        <RowItemLabel>{otherMedicalHistory.label}</RowItemLabel>
        <FormItem>
          {
            getFieldDecorator(otherMedicalHistory.key, {
              initialValue: get(medicalHistory, otherMedicalHistory.key, ''),
            })(
              <StyledInput width={300} />,
            )
          }
        </FormItem>
      </RowItem>
      <RowItem isInline>
        <RowItemLabel>{allergyHistory.label}</RowItemLabel>
        <FormItem>
          {
            getFieldDecorator(allergyHistory.key, {
              initialValue: get(medicalHistory, allergyHistory.key, ''),
            })(
              <StyledInput width={300} />,
            )
          }
        </FormItem>
      </RowItem>
      <FamilyHistory
        {...defaultFunc}
        familyHistory={medicalHistory.familyHistory}
      />
      <StyledConclusion>
        <RowItemLabel fontSize={16}>结论</RowItemLabel>
        <p>
          {
            getFieldDecorator('hypertensionLevel', {
              initialValue: get(medicalHistory, 'conclusion.hypertensionLevel', ''),
            })(
              <span>{hypertensionLevelMap[getFieldValue('hypertensionLevel')]} </span>,
            )
          }
          {
            getFieldDecorator('riskLevel', {
              initialValue: get(medicalHistory, 'conclusion.riskLevel', ''),
            })(
              <span>{riskLevelMap[getFieldValue('riskLevel')]}</span>,
            )
          }
        </p>
      </StyledConclusion>
      <FooterContainer>
        <Button onClick={closeModal}>取消</Button>
        <BtnMarginLeft type="primary" icon="save" onClick={() => updateMedicalHistory(props)}>保存</BtnMarginLeft>
      </FooterContainer>
    </Form>
  </StyledEditModal>)
}

EditModal.propTypes = {
  form: PropTypes.object,
  medicalHistory: PropTypes.object,
  closeModal: PropTypes.func,
}

const FooterContainer = styled.div`
  padding: 25px 30px 45px;
  text-align: right;
`
const BtnMarginLeft = styled(Button)`
  margin-left: 8px;
`

const WrappedNormalEditModal = Form.create()(EditModal)

export default WrappedNormalEditModal
