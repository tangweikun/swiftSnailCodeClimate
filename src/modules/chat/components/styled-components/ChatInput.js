import styled from 'styled-components'
import { Icon, Input } from 'antd'

export const ChatInputContainer = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 72px;
  padding: 4px;
  border-top: 1px solid ${props => props.theme.general.color.BORDER};
`

export const ChatButtonsContainer = styled.div`margin-top: 8px;`

export const ChatInput = styled(Input)`
  border: none !important;
`
export const ChatAdditionButton = styled(Icon)`
  padding: 4px;
  font-size: ${props => props.theme.general.size.LITTLE_LARGER};
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`

export const EmojiTable = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow-y: auto;
  font-size: 20px;
  margin-left: 8px;
`

export const Emoji = styled.span`
  padding: 4px 8px 3px 4px;
  cursor: pointer;
  border-radius: 2px;
  &:hover {
    background-color: #eee;
  }
`
