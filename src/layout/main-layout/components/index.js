import React, { PropTypes } from 'react'
import { Layout } from 'antd'
import { Redirect } from 'react-router-dom'
// import isEmpty from 'lodash/isEmpty'
import PatientListSlider from '../../../modules/left-nav/containers/PatientListSlider'
import SiderBar from '../../../modules/left-nav/containers/Sider'
import ModalContainer from '../../../modules/modal/containers'
import ChatContainer from '../../../modules/chat/containers/ChatContainer'
import IncomingMessageButton from '../../../modules/chat/containers/IncomingMessageButton'
import {
  StyledLayout,
  StyledHeader,
  StyledContent,
  StyledFooter,
  HospitalName,
  SystemName,
  PowerBy,
  RightSideContainer,
} from './styled-components'

const MainLayout = (props) => {
  const token = localStorage.getItem('token')
  const from = { pathname: '/login' }
  props.data.refetch()
  if (!token) {
    localStorage.removeItem('token')
    return <Redirect to={from} />
  }

  return (
    <StyledLayout className="ant-layout-has-sider">
      <SiderBar {...props} />
      <Layout>
        <StyledHeader>
          <HospitalName>301医院海南三亚分院</HospitalName>
          <SystemName>-高血压管理系统</SystemName>
          <PowerBy>Powered by iHealth</PowerBy>
          <RightSideContainer>
            <IncomingMessageButton />
          </RightSideContainer>
        </StyledHeader>
        <StyledContent>
          {props.children}
          <ChatContainer />
        </StyledContent>
        <PatientListSlider history={props.history} />
        <StyledFooter>Copyright © 爱和健康</StyledFooter>
      </Layout>
      <ModalContainer />
    </StyledLayout>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default MainLayout
