import { Card, Button } from 'antd'
import React from 'react'
import SafeBloodPressure from './safe-bloodpressure.js'
import MeasureModule from './measure-module.js'
import Bloodchart from './chart-blood-pressure.js'
import Pulsechart from './chart-pulse-trend.js'

const ButtonGroup = Button.Group

const RightMeasurementHistoryTable = (props) => {
  console.log('RightPartPatient', props)
  return (
    <div>
      <Card
        bordered
        className="mockCardMargin"
        title={
          <div>
            <span style={{ fontSize: '14px' }}>血压趋势</span>
            <ButtonGroup style={{ float: 'right' }}>
              <Button type="ghost" key="1">
                7日
              </Button>
              <Button type="ghost" key="2">
                1个月
              </Button>
              <Button type="ghost" key="3">
                3个月
              </Button>
              <Button type="ghost" key="4">
                全部
              </Button>
            </ButtonGroup>
          </div>
        }
      >
        {<Bloodchart />}
      </Card>
      <Card
        bordered
        className="mockCardMargin"
        title={
          <div>
            <span style={{ fontSize: '14px' }}>脉搏趋势</span>
            <ButtonGroup style={{ float: 'right' }}>
              <Button type="ghost" key="1">
                7日
              </Button>
              <Button type="ghost" key="2">
                1个月
              </Button>
              <Button type="ghost" key="3">
                3个月
              </Button>
              <Button type="ghost" key="4">
                全部
              </Button>
            </ButtonGroup>
          </div>
        }
      >
        {<Pulsechart />}
      </Card>

      <Card title="血压安全范围定义" bordered className="mockCardMargin">
        <SafeBloodPressure {...props} />
      </Card>
      <Card title="血压自测模组" bordered className="mockCardMargin">
        <MeasureModule />
      </Card>
    </div>
  )
}

export default RightMeasurementHistoryTable
