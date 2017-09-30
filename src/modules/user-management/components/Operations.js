import React, { PropTypes } from 'react'
import { Button } from 'antd'

class Operations extends React.Component {
  static propTypes = {
    currentItem: PropTypes.object,
    healthCareProfessional: PropTypes.object,
    popupUpdateHealthCareProfessional: PropTypes.func,
  }
  shouldComponentUpdate() {
    return false
  }
  render() {
    const { currentItem, popupUpdateHealthCareProfessional, healthCareProfessional } = this.props
    console.log(healthCareProfessional)
    return (<div>
      <Button
        onClick={() => popupUpdateHealthCareProfessional(currentItem)}
      >编辑</Button>
    </div>)
  }
}

export default Operations
