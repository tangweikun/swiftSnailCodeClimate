import React, { PropTypes } from 'react'
import { Form, Input } from 'antd'
import idcard from 'idcard'
import { isNumber } from '../actions'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 12 },
}

const validator = (rule, value, callback) => {
  if (isNumber(value, 18)) {
    if (value && !idcard.verify(value.toUpperCase())) {
      callback('身份证信息有误，请在检查')
    } else {
      callback()
    }
  } else if (!value) {
    callback()
  } else {
    callback('请输入18位有效的身份证')
  }
}

const IdCard = ({ getFieldDecorator }) =>
  (<FormItem
    label="身份证"
    {...formItemLayout}
  >
    {
      getFieldDecorator('idCard', {
        rules: [
          { validator },
        ],
      })(
        <Input />,
      )
    }
  </FormItem>)

IdCard.propTypes = {
  getFieldDecorator: PropTypes.func.isRequired,
}

export default IdCard
