import React, { PropTypes } from 'react'
import { Icon } from 'antd'
import styled from 'styled-components'
import moment from 'moment'
import { LableWithStyle } from './styled-component'

const genderMap = {
  MALE: '男',
  FEMALE: '女',
}

const bpMap = {
  LEVEL_1: '一级高血压',
  LEVEL_2: '二级高血压',
  LEVEL_3: '三级高血压',
}

const showPropertys = [
  { key: 'gender', getValue: o => genderMap[o] },
  { key: 'dateOfBirth', getValue: o => `${moment().diff(moment(o), 'years')}岁` },
  { key: 'hypertensionLevel', getValue: o => bpMap[o] },
]

const ListItem = ({ patient, switchPatient }) => {
  if (!patient || !patient.boundDetails) return null
  const { isStarred } = patient.boundDetails
  return (<ItemContainer onClick={switchPatient}>
    <div>
      <Avatar src={patient.avatar} />
      <FullName>{patient.fullName}</FullName>
      {
        showPropertys
          .filter(o => patient.boundDetails[o.key])
          .map(property => (<InlineDiv key={property.key}>
            { property.key !== 'gender' && <LineSpace />}
            <LableWithStyle>{
              property.getValue(patient.boundDetails[property.key])
            }</LableWithStyle>
          </InlineDiv>))
      }
    </div>
    <Star type={isStarred ? 'star' : 'star-o'} isStarred={isStarred} />
  </ItemContainer>)
}

ListItem.propTypes = {
  patient: PropTypes.object.isRequired,
  switchPatient: PropTypes.func.isRequired,
}

const ItemContainer = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  border-bottom: solid 1px rgba(255, 255, 255, 0.05);
  display: flex;
  color: #ffffff;
  justify-content: space-between;
`
const Avatar = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  vertical-align: bottom;
`
const Star = styled(Icon)`
  font-size: 9px;
  color: ${props => (props.isStarred ? '#0cc4bb' : '#979797')};
  padding-top: 7px;
`
const InlineDiv = styled.div`
  display: inline-block;
  vertical-align: super;
`
const FullName = styled(InlineDiv)`
  margin: 0 10px;
`

const LineSpace = styled.div`
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  display: inline-block;
  height: 13px;
  width: 6px;
  margin-right: 6px;
  vertical-align: sub;
`

export default ListItem
