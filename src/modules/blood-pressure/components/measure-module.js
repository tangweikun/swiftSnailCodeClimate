import React, { PropTypes } from 'react'
import { graphql } from 'react-apollo'
import get from 'lodash/get'
import { queryMeasureModule } from '../actions'

const MeasureModule = (props) => {
  const measureTime = get(props, 'data.measureModule', {})
  const first = measureTime && measureTime.morningAt ? measureTime.morningAt.split(',') : ['6', '9']
  const second = measureTime && measureTime.eveningAt ? measureTime.eveningAt.split(',') : ['18', '21']
  return (
    <div>
      <div>
        <span style={{ color: '#26344b', fontFamily: 'PingFangSC-Semibold' }}>早晨测量1次</span>
        <span style={{ color: '#535353', fontFamily: 'PingFangSC-Regular' }}> {first[0]}点--{first[1]}点 </span>
      </div>
      <div>
        <span style={{ color: '#26344b', fontFamily: 'PingFangSC-Semibold' }}>晚上测量1次</span>
        <span style={{ color: '#535353', fontFamily: 'PingFangSC-Regular' }}> {second[0]}点--{second[1]}点 </span>
      </div>
    </div>
  )
}

MeasureModule.propTypes = {
  data: PropTypes.object.isRequired,
}
export default graphql(queryMeasureModule)(MeasureModule)
