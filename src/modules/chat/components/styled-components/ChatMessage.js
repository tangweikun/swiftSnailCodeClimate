import styled from 'styled-components'
import { Avatar, Badge, Tabs } from 'antd'

export const TabsWithStyle = styled(Tabs)`
  .ant-tabs-bar {
     border-bottom: 1px solid rgba(255, 255, 255, 0.2);
     margin-bottom: 0;
  }
  .ant-tabs-nav-wrap {
     text-align: center;
     font-weight: 200;
     font-size: 12px;
  }
  .ant-tabs-nav-container {
     width: 300px;
  }
`
export const ChatMessagePanel = styled.div`
  width: 320px;
  padding: 10px 10px 70px 10px;
  border-radius: 2px;
  border: 1px;
  background-color: #fff;
`
export const ChatMessageBox = styled.div`
  float: right;
  padding: 10px, 0, 10px, 5px;
  width: 300px;
`

export const ChatMessageItem = styled.div`
  position: relative;
  width: 300px;
  height: 59px;
  background-color: ${props => (props.lightening ? '#f4f4f2' : '#fff')};
  padding: 9px 5px 9px 51px;
  border-top: 1px solid #d9d9d9;
  cursor: pointer;
`

export const ChatMessageAvatar = styled(Avatar)`
  position: absolute !important;
  left: 5px !important;
  top: 9px !important;
  width: 40px !important;
  height: 40px !important;
  line-height: 40px !important;
  border-radius: 20px !important;
  flex-shrink: 0;
  img {
    line-height: 40px !important;
  }
`

export const ChatMessageAccount = styled.div`
  height: 17px;
  font-family: PingFangSC;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`
export const ChatMessageInfo = styled.span`
  float: left;
  margin-left: 2px;
  margin-right: 5px;
  opacity: 0.26;
`

export const ChatMessageDate = styled.span`
  float: right;
  color: #9b9b9b;
  margin-right: 2px;
`
export const ChatStyBadge = styled(Badge)`
  .ant-badge-count {
    font-size: ${props => props.theme.general.size.small};
    font-weight: 100;
    position: relative !important;
    top: -2px !important;
  }
}
`
export const ChatMessageBrief = styled.div`
  padding: 3px 2px 0 5px;
  height: 20px;
  font-family: Microsoft YaHei;
  font-size: 12px;
  font-weight: lighter;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #666666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const ChatMessageMore = styled.div`
  height: 32px;
  background-color: #ffffff;
  line-height: 32px;
  font-family: PingFangSC;
  font-size: 10px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #4f5c78;
  text-align: center;
  border-top: 1px solid #d9d9d9;
`

export const ChatMessageMute = styled.div`
  position: absolute;
  border-radius: 3px;
  background-color: #f8f8f8;
  font-family: PingFangSC;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 35px;
  letter-spacing: normal;
  color: #666666;
  bottom: 0;
  width: 100%;
  left: 0px;
  padding-left: 15px;
`

export const ChatMessageMuteNotice = styled.span`
  position: relative;
  top: 2px;
`
// export const ChatMessageBtnContainer = styled.div``
