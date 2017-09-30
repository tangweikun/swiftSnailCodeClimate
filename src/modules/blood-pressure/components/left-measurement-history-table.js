import React from 'react'
import { Card, Button } from 'antd'
import styled from 'styled-components'
import ShowHistoryTable from './show-history-table.js'

const ButtonGroup = Button.Group
class LeftMeasurementHistoryTable extends React.Component {
  state = {
    period: 'default',
  }
  render() {
    const setPeriod = (period) => {
      this.setState({ period })
    }

    return (
      <BtnCard
        bordered
        className="tablecard"
        title={
          <div>
            <span style={{ fontSize: '14px' }}>自测血压及统计</span>
            <ButtonGroup style={{ float: 'right' }}>
              <Button type="ghost" key="1" onClick={() => setPeriod('default')}>
                7天
              </Button>
              <Button type="ghost" key="2" onClick={() => setPeriod('1month')}>
                1个月
              </Button>
              <Button type="ghost" key="3" onClick={() => setPeriod('3months')}>
                3个月
              </Button>
              <Button type="ghost" key="4" onClick={() => setPeriod('all')}>
                全部
              </Button>
            </ButtonGroup>
          </div>
        }
      >
        <ShowHistoryTable {...this.props} period={this.state.period} />
      </BtnCard>
    )
  }
}
const BtnCard = styled(Card)`
  .ant-card-head-title {
    width: 100%;
  }
  .ant-card-body {
    width: 100%;
  }
`

export default LeftMeasurementHistoryTable
