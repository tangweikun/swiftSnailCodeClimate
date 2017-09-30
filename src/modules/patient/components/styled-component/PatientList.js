import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Input, Icon, Tabs } from 'antd'

const Search = Input.Search

export const PatientListHeader = ({ popupAddPatient, handlePatientsSearch }) => (<Header>
  <SearchWithStyle
    placeholder="患者姓名搜索"
    onChange={e => handlePatientsSearch(e.target.value)}
  />
  <AddPatientContainer onClick={popupAddPatient}>
    <AddIcon type="user-add" />
    <LableWithStyle>新患者</LableWithStyle>
  </AddPatientContainer>
</Header>)


PatientListHeader.propTypes = {
  popupAddPatient: PropTypes.func.isRequired,
  handlePatientsSearch: PropTypes.func.isRequired,
}

export const LableWithStyle = styled.span`
  opacity: 0.5;
  font-family: PingFangSC;
  font-size: 12px;
  color: #ffffff;
`
export const PatientListContainer = styled.div`
  width: 280px;
  height: 100%;
  background-color: #1a2430;
  font-size: 12px;
  font-family: PingFangSC;
  color: #ffffff;
`

export const TabsWithStyle = styled(Tabs)`
  .ant-tabs-bar {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 5px;
  }
  .ant-tabs-nav-wrap {
    text-align: center;
  }
`
const AddIcon = styled(Icon)`
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  font-weight: 600;
`
const SearchWithStyle = styled(Search)`
  width: 160px !important;
  input::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.3);
    font-family: PingFangSC-Regular;
  }
  .ant-input {
    width: 160px;
    height: 28px;
    border-radius: 4px;
    border: solid 1px rgba(255, 255, 255, 0.2);
    background-color: rgba(0, 0, 0, 0.2);
    color: #ffffff;
  }
`

const Header = styled.div`
  padding: 20px 10px;
  display: flex;
`
const AddPatientContainer = styled.div`
  line-height: 28px;
  margin-left: 20px;
  cursor: pointer;
`
