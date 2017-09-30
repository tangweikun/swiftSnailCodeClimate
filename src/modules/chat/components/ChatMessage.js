import React, { PropTypes } from 'react'
import { Checkbox, Tabs } from 'antd'
import moment from 'moment'

import {
  ChatMessagePanel,
  ChatMessageBox,
  ChatMessageItem,
  ChatMessageAvatar,
  ChatMessageAccount,
  ChatMessageInfo,
  ChatStyBadge,
  ChatMessageDate,
  ChatMessageBrief,
  ChatMessageMore,
  ChatMessageMute,
  ChatMessageMuteNotice,
  TabsWithStyle,
} from './styled-components'

const TabPane = Tabs.TabPane

const ChatMessage = props =>
  (<ChatMessagePanel>
    <TabsWithStyle defaultActiveKey="1">
      <TabPane tab="患者消息(10)" key="1">
        {props.latestMessageList &&
          props.latestMessageList.map(o =>
            (<ChatMessageItem onClick={props.openChatWindow}>
              <ChatMessageAvatar src={o.avatar} />
              <ChatMessageAccount>
                <ChatMessageInfo>女 | 36岁</ChatMessageInfo>
                <ChatStyBadge count={9} />
                <ChatMessageDate>
                  {moment(o.createdAt).format('YYYY-MM-DD HH:mm')}
                </ChatMessageDate>
              </ChatMessageAccount>
              <ChatMessageBrief>
                {o.text}
              </ChatMessageBrief>
            </ChatMessageItem>),
          )}
      </TabPane>
      <TabPane tab="同事消息(10)" key="2">
        {props.latestMessageList &&
          props.latestMessageList.map(o =>
            (<ChatMessageItem lightening>
              <ChatMessageAvatar src={o.avatar} />
              <ChatMessageAccount>
                <ChatMessageInfo>女 | 36岁</ChatMessageInfo>
                <ChatStyBadge count={9} />
                <ChatMessageDate>
                  {moment(o.createdAt).format('YYYY-MM-DD HH:mm')}
                </ChatMessageDate>
              </ChatMessageAccount>
              <ChatMessageBrief>
                {o.text}
              </ChatMessageBrief>
            </ChatMessageItem>),
          )}
      </TabPane>
    </TabsWithStyle>
    <ChatMessageBox>
      <ChatMessageMore>加载更多信息聊天</ChatMessageMore>
    </ChatMessageBox>
    <ChatMessageMute>
      <Checkbox />
      <ChatMessageMuteNotice>患者群消息免打扰</ChatMessageMuteNotice>
    </ChatMessageMute>
  </ChatMessagePanel>)

ChatMessage.propTypes = {
  latestMessageList: PropTypes.array.isRequired,
  openChatWindow: PropTypes.array.isRequired,
}

export default ChatMessage
