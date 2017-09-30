import React, { PropTypes } from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

const { Header, Content } = Layout

const LayoutWithStyle = styled(Layout)`
  background: url('./login_bg.jpg') no-repeat center center fixed;
  height: 100vh;
  background-size: cover;
`

const HeaderWithStyle = styled(Header)`
  background: #26334b;
  height: 30vh;
`

const Hostname = styled.span`
  color: #ffffff;
  font-family: PingFangSC-Thin;
  font-weight: 100;
`

const ProjectName = styled.span`
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  text-align: center;
  color: #1bbaad;
  margin-left: 10px;
`
const TitleContainer = styled.div`
  font-size: 54px;
  text-align: center;
  margin-top: calc(30vh - 75px);
`
const ContentWithStyle = styled(Content)`
  background-color: rgba(0, 35, 64, ${props => props.theme.general.opacity.FAINT});
`

const LoginLayout = (props) => {
  const { from } = { from: { pathname: '/' } }
  if (localStorage.getItem('token')) {
    return <Redirect to={from} />
  }
  return (
    <LayoutWithStyle>
      <HeaderWithStyle>
        <TitleContainer>
          <Hostname />
          <ProjectName>高血压管理系统</ProjectName>
        </TitleContainer>
      </HeaderWithStyle>
      <ContentWithStyle>
        {props.children}
      </ContentWithStyle>
    </LayoutWithStyle>
  )
}

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LoginLayout
