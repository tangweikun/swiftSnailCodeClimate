import React, { PropTypes } from 'react'
import { Layout, Menu, Icon } from 'antd'
import styled from 'styled-components'
import HaiNanLogo from '../logo/logo-301.png'

const { Sider } = Layout
const routerMap = {
  home: '/',
  patient: '',
  settings: '/settings/user-management',
}

const handledNavClick = ({ item, props }) => {
  const { isOpenSliderNav, history, togglePatientSider } = props
  if (routerMap[item.key] && (history.location.pathname !== routerMap[item.key])) {
    history.push(routerMap[item.key])
  }
  if (isOpenSliderNav || item.key === 'patient') {
    togglePatientSider()
  }
}

const menus = [
  { label: '主页', type: 'home', icon: 'home' },
  { label: '病人', type: 'patient', icon: 'team' },
  { label: '设置', type: 'settings', icon: 'setting' },
]

const SiderBar = (props) => {
  let selectedKeys = ['home']
  if (/\/patient/.test(props.match.path)) {
    selectedKeys = ['patient']
  } else if (/\/settings/.test(props.match.path)) {
    selectedKeys = ['settings']
  }
  return (<SiderContainer collapsed collapsedWidth={54}>
    <LogoIconContainer>
      <LogoIcon src={HaiNanLogo} />
    </LogoIconContainer>
    <StyledMenu
      theme="dark"
      defaultSelectedKeys={['home']}
      selectedKeys={selectedKeys}
      style={{ width: '54px' }}
      onClick={item => handledNavClick({ item, props })}
    >
      {
        menus.map(menu => (<Menu.Item
          key={menu.type}
        >
          <StyledIcon type={menu.icon} />
          <span>{menu.label}</span>
        </Menu.Item>))
      }
    </StyledMenu>
  </SiderContainer>)
}


SiderBar.propTypes = {
  match: PropTypes.object.isRequired,
}

const SiderContainer = styled(Sider)`
  z-index: ${props => props.theme.general.zIndex.MID};
  min-height: ${props => props.theme.general.height.minWithHeader};
`
const LogoIconContainer = styled.div`
  background-color: #0cc4bb;
  width: 54px;
  height: 56px;
`

const LogoIcon = styled.img`
  width: 32px;
  margin: 10px 0 0 10px;
`
const StyledIcon = styled(Icon)`
  font-size: 20px !important;
  margin-left: -8px !important;
  line-height: 54px !important;
`
const StyledMenu = styled(Menu)`
  .ant-menu-item {
    height: 54px;
  }
`

export default SiderBar
