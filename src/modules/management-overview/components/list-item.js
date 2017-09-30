import React, { PropTypes } from 'react'
import styled from 'styled-components'
import moment from 'moment'

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

const ListItemHomeView = ({ patient }) => {
  if (!patient || !patient.boundDetails) return null
  return (
    <ItemContainer>
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
              }|</LableWithStyle>
            </InlineDiv>))
        }
      </div>
    </ItemContainer>)
}

ListItemHomeView.propTypes = {
  patient: PropTypes.object.isRequired,
}

export const LableWithStyle = styled.span`
  opacity: 0.5;
  font-family: PingFangSC;
  font-size: 12px;
  color: #000000;
`

const ItemContainer = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #cfcfcf;
  display: flex;
  color: #000000;
  justify-content: space-between;
`
const Avatar = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  vertical-align: bottom;
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

export default ListItemHomeView
