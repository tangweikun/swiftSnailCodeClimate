import React, { PropTypes } from 'react'
import { Form, Button, Input, Icon } from 'antd'
import styled from 'styled-components'
import { RowItem, RowItemLabel, StyledEditModal } from './styled-components'
import { updateMedicalHistory } from '../actions'
import MedicineItem from './MedicineItem'

const FormItem = Form.Item
const { TextArea } = Input

class EditModal extends React.Component {
  state = {
    medicines: [
      {
        name: '',
        dosage: '',
        usage: '',
      },
      {
        name: '',
        dosage: '',
        usage: '',
      },
      {
        name: '',
        dosage: '',
        usage: '',
      },
      {
        name: '',
        dosage: '',
        usage: '',
      },
    ],
  }
  changeMedicines = (meds) => {
    this.setState({ medicines: meds })
  }
  addMedicineItem = () => {
    const temp = [...this.state.medicines]
    temp.push({
      name: '',
      dosage: '',
      usage: '',
    })
    this.setState({
      medicines: temp,
    })
  }
  render() {
    return (
      <StyledEditModal>
        <Form>
          <RowItem isInline>
            <RowItemLabel>主诉：</RowItemLabel>
            <FormItem>
              <TextArea rows={3} style={{ width: '490px' }} placeholder="填写主诉内容" />
            </FormItem>
          </RowItem>
          <RowItem isInline>
            <RowItemLabel>查体：</RowItemLabel>
            <FormItem>
              <TextArea rows={3} style={{ width: '490px' }} />
            </FormItem>
          </RowItem>
          <RowItem isInline>
            <RowItemLabel>检验：</RowItemLabel>
            <FormItem>
              <TextArea rows={3} style={{ width: '490px' }} />
            </FormItem>
          </RowItem>
          <RowItem isInline>
            <RowItemLabel>诊断：</RowItemLabel>
            <FormItem>
              <TextArea rows={3} style={{ width: '490px' }} />
            </FormItem>
          </RowItem>
          <RowItem isInline>
            <RowItemLabel>处方：</RowItemLabel>
            <FormItem>
              {this.state.medicines.map((item, index) => (
                <MedicineItem
                  itemIndex={index}
                  changeEditModalState={this.changeMedicines}
                  allMdcs={this.state.medicines}
                />
              ))}
              <Button size="default" onClick={this.addMedicineItem}>
                <Icon type="plus" />添加药物
              </Button>
            </FormItem>
          </RowItem>
          <FooterContainer>
            <Button onClick={this.props.closeModal}>取消</Button>
            <BtnMarginLeft
              type="primary"
              icon="save"
              onClick={() => updateMedicalHistory(this.props)}
            >
              保存
            </BtnMarginLeft>
          </FooterContainer>
        </Form>
      </StyledEditModal>
    )
  }
}

EditModal.propTypes = {
  // caseRecord: PropTypes.object,
  closeModal: PropTypes.func,
}

const FooterContainer = styled.div`
  padding: 25px 30px 45px;
  text-align: center;
`
const BtnMarginLeft = styled(Button)`margin-left: 8px;`

const WrappedNormalEditModal = Form.create({
  onFieldsChange: (props, fieldNames) => {
    console.log(props, fieldNames)
  },
})(EditModal)

export default WrappedNormalEditModal
