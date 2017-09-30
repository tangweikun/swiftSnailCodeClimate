import React, { PropTypes } from 'react'
import { Input, Cascader, Button } from 'antd'
import styled from 'styled-components'
// import _ from 'lodash'
// import pinyin from 'pinyin'
import { MedicinesOption } from '../constants'

class MedicineItem extends React.Component {
  state = {
    dosage: '',
    usage: '',
  }
  onChange = (value) => {
    const st = {
      dosage: value[1] ? value[1] : '',
      usage: value[2] ? value[2] : '',
    }
    this.setState(st)
  }
  deleteClick = () => {
    console.log(`Your click to delete index ${this.props.itemIndex}`)
    const temp = [...this.props.allMdcs]
    // remove index of clicked item
    temp.splice(this.props.itemIndex, 1)
    // reset parent component state
    this.props.changeEditModalState(temp)
  }
  displayRender = label => (label[0] ? label[0] : '')
  render() {
    return (
      <FlexDiv>
        <FlexDiv>
          <Cascader
            options={MedicinesOption}
            onChange={this.onChange}
            placeholder="请填写处方药品"
            showSearch
            style={{ width: '240px' }}
            expandTrigger="hover"
            notFoundContent="没有匹配药品"
            changeOnSelect
            displayRender={this.displayRender}
          />
        </FlexDiv>
        <MarginFlexDiv>
          <Input style={{ width: '50px' }} value={this.state.dosage} />
        </MarginFlexDiv>
        <MarginFlexDiv>{'mg'}</MarginFlexDiv>
        <MarginFlexDiv>
          <Input style={{ width: '50px' }} value={this.state.usage} />
        </MarginFlexDiv>
        <MarginFlexDiv>
          <Button icon="delete" style={{ border: 'none' }} onClick={this.deleteClick} />
        </MarginFlexDiv>
      </FlexDiv>
    )
  }
}

MedicineItem.propTypes = {
  // caseRecord: PropTypes.object,
  changeEditModalState: PropTypes.func,
  allMdcs: PropTypes.array,
  itemIndex: PropTypes.number,
}

const FlexDiv = styled.div`
  display: flex;
  flex: auto initial initial;
`

const MarginFlexDiv = FlexDiv.extend`margin-left: 10px;`

export default MedicineItem
