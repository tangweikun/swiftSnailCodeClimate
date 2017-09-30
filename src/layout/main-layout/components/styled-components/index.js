import styled from 'styled-components'
import { Layout } from 'antd'

const { Header, Content, Footer } = Layout

export const StyledLayout = styled(Layout)`
    height: 100vh;
`
export const StyledHeader = styled(Header)`
    background: #fff;
    padding: 0;
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    padding-left: 19px;
    border-bottom: 1px solid ${props => props.theme.general.color.BORDER};
    font-weight: bold;
`
export const StyledContent = styled(Content)`
    width: 100%;
    background: #e9ebef;
`
export const StyledFooter = styled(Footer)`
  padding: 3px 50px;
  text-align: center;
  border-top: 1px solid #cfcfcf;
`

export const HospitalName = styled.span`
  color: ${props => props.theme.general.color.PRIMARY};
  font-weight: lighter;
`

export const SystemName = styled.span`color: ${props => props.theme.general.color.TITLE};`

export const PowerBy = styled.span`
  color: ${props => props.theme.general.color.BORDER};
  font-size: ${props => props.theme.general.size.SMALL};
  font-weight: 100;
  margin: 5px;
`
export const RightSideContainer = styled.span`
  float: right;
  margin: 0 30px;
`
