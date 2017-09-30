import styled from 'styled-components'

export const Menu = styled.div`width: 180px;`

export const TabLabel = styled.div`
  cursor: ${props => (props.isActive || props.overdue ? 'auto' : 'pointer')};
  display: flex;
  flex-flow: column nowrap;
  flex: 1 0 auto;
  height: 40px;
  background-color: ${(props) => {
    if (props.isActive) return '#fff'
    if (props.overdue) return '#666'
    return 'unset'
  }};
  ${(props) => {
    if (!props.isActive && !props.overdue) return { '&:hover': 'rgba(255, 255, 255, 0.2)' }
    return null
  }};
`

export const TabLabelTextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1 1 auto;
  padding: 0 15px;
`

export const TabLabelText = styled.div`
  color: ${props => (props.isActive ? props.theme.general.color.TITLE : '#fff')};
  font-weight: ${props => (props.isActive ? 500 : 200)};
  white-space: nowrap;
`

export const Bamboo = styled.div`
  display: flex;
  flex: 0 0 auto;
  height: 4px;
  align-self: stretch;
`

export const SectionOfBamboo = styled.div`
  flex: 1 1 auto;
  background-color: ${props => props.color || '#d8d8d8'};
  margin: 0 1px;
`
