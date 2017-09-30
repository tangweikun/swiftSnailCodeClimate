import styled from 'styled-components'

export const ArrowWrapper = styled.div`
  width: 8px;
  flex-shrink: 0;
  overflow-x: hidden;
  margin-right: ${props => (props.direction === 'left' ? '-1px' : '0')};
  margin-left: ${props => (props.direction === 'right' ? '-1px' : '0')};
`
export const ArrowShape = styled.div`
  margin: 10px 5px;
  width: 8px;
  height: 8px;
  background-color: ${props =>
    props.direction === 'right' ? props.theme.general.color.TITLE : '#fff'};
  border: 1px solid ${props => props.theme.general.color.TITLE};
  transform: rotate(45deg);
  float: ${props => props.direction};
`

export const Content = styled.div`
  background-color: ${props =>
    props.sender === 'self' ? props.theme.general.color.TITLE : '#fff'};
  color: ${props => (props.sender === 'self' ? '#fff' : props.theme.general.color.MAIN_CONTENT)};
  font-size: ${props => props.theme.general.size.NORMAL};
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.general.color.TITLE};
  min-height: 32px;
  word-break: break-word;
`

export const Message = styled.div`
  display: flex;
  flex-direction: ${props => (props.sender === 'self' ? 'row-reverse' : 'row')};
  align-items: flex-start;
  margin: 20px 0;
`
