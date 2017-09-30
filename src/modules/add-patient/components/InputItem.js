import React, { PropTypes } from 'react'
import { Form, Input, Icon } from 'antd'
import { isNumber } from '../actions'

const FormItem = Form.Item

const MapsForItem = {
  height: {
    addonAfter: 'CM',
    label: '身高',
    message: '身高为有效数字',
    validator: (rule, value, callback) => {
      if (isNumber(value)) {
        callback()
      } else {
        callback('身高为有效数字')
      }
    },
  },
  weight: {
    addonAfter: 'KG',
    label: '体重',
    message: '体重为有效数字',
    validator: (rule, value, callback) => {
      if (isNumber(value)) {
        callback()
      } else {
        callback('身高为有效数字')
      }
    },
  },
  mobile: {
    addonAfter: null,
    label: '手机号',
    message: '手机号不能为空',
    placeholder: '请输入',
    prefix: <Icon type="phone" />,
    validator: (rule, value, callback) => {
      if (isNumber(value, 11)) {
        callback()
      } else {
        callback('手机号为11位有效数字')
      }
    },
  },
  fullName: {
    label: '姓名',
    message: '姓名不能为空',
    placeholder: '请输入',
  },
  HISNumber: {
    label: '病历号',
    message: '病历号不能为空',
    placeholder: 'HN',
  },
}

const InputItem = ({
  getFieldDecorator,
  formItemLayout,
  type,
  initialValue,
}) =>
  (<FormItem label={MapsForItem[type].label} {...formItemLayout}>
    {getFieldDecorator(type, {
      rules: [{
        required: true,
        message: MapsForItem[type].message,
      }, {
        validator: MapsForItem[type].validator || ((rule, value, callback) => callback()),
      }],
      initialValue,
    })(
      <Input
        placeholder={MapsForItem[type].placeholder}
        prefix={MapsForItem[type].prefix}
        addonAfter={MapsForItem[type].addonAfter}
      />,
    )}
  </FormItem>)

InputItem.propTypes = {
  getFieldDecorator: PropTypes.func.isRequired,
  formItemLayout: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  initialValue: PropTypes.any,
}

export default InputItem
