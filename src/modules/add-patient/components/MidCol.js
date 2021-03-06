import React, { PropTypes } from 'react'
import { Col } from 'antd'
import get from 'lodash/get'

import Contacts from './Contacts'
import BirthDay from './BirthDay'
import InputItem from './InputItem'
import RadioGroup from './RadioGroup'
import IdCard from './IdCard'

import {
  gender as genderInfo,
} from '../constants'

import FemaleSrc from './patient-female.png'
import MaleSrc from './patient-male.png'

const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 7 },
}

const changeAvatar = (e, form) => {
  const avatar = e.target.value === 'MALE' ? MaleSrc : FemaleSrc
  form.setFieldsValue({
    avatar,
  })
}

const showFields = [
  { type: 'height' },
  { type: 'weight' },
  { type: 'HISNumber',
    formItemLayout: {
      labelCol: { span: 5 },
      wrapperCol: { span: 12 },
    } },
  { type: 'mobile',
    formItemLayout: {
      labelCol: { span: 5 },
      wrapperCol: { span: 12 },
    } },

]

const MidCol = ({ form, patientInfo = {} }) => {
  const boundDetails = get(patientInfo, 'boundDetails', {})
  const { dateOfBirth, emergencyContact } = boundDetails
  const { getFieldDecorator, setFieldsValue } = form
  const defaultFunc = {
    getFieldDecorator,
    setFieldsValue,
    formItemLayout,
  }
  return (<Col span={8}>
    <RadioGroup
      {...defaultFunc}
      info={genderInfo}
      initialValue={boundDetails.gender}
      handleChange={e => changeAvatar(e, form)}
    />
    <BirthDay
      {...defaultFunc}
      dateOfBirth={dateOfBirth}
    />
    {
      showFields.map(field => (<InputItem
        key={field.type}
        {...defaultFunc}
        type={field.type}
        formItemLayout={
          field.formItemLayout || formItemLayout
        }
        initialValue={boundDetails[field.type] || patientInfo[field.type]}
      />))
    }
    <Contacts
      {...defaultFunc}
      emergencyContact={emergencyContact}
    />
    <IdCard {...defaultFunc} />
  </Col>)
}

MidCol.propTypes = {
  form: PropTypes.object.isRequired,
  patientInfo: PropTypes.object,
}

export default MidCol
