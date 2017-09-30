import React, { PropTypes } from 'react'
import { Icon } from 'antd'
import { ButtonWithIcon } from './styled-components'

export const Button = ({ onClick, text, icon }) => (
  <ButtonWithIcon onClick={onClick}>
    <Icon type={icon} />
    <span>{text}</span>
  </ButtonWithIcon>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
