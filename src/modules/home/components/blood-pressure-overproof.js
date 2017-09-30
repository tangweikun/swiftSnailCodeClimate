import React, { PropTypes } from 'react'
import { Card, Button } from 'antd'
import get from 'lodash/get'
import moment from 'moment'
import { graphql } from 'react-apollo'
import styled from 'styled-components'
import { queryOverproof } from '../actions/query.js'
import OverproofTable from './overproof-table.js'


const ButtonGroup = Button.Group
const handleState = (data) => {
  const tableDate = get(data, 'me.healthCareTeams[0].overproofPatients', [])
  let count = 0
  console.log(tableDate, 'ssss')
  if (tableDate.length) {
    tableDate.map((item) => {
      if (item.state) {
        count += 1
      }
      return true
    })
  }
  return { handled: count, withoutHandle: tableDate.length - count }
}
const BloodPressureOverproof = (props) => {
  const { data } = props
  const refetchs = (date) => {
    if (date === 'all') {
      props.data.refetch({
        after: moment().subtract(50, 'years'),
      })
    } else if (date === '3days') {
      props.data.refetch({
        after: moment().subtract(3, 'days'),
      })
    } else if (date === '7days') {
      props.data.refetch({
        after: moment().subtract(7, 'days'),
      })
    } else {
      props.data.refetch({
        after: moment().startOf('day'),
      })
    }
  }
  const handleNums = handleState(data)
  return (
    <div>
      <BtnCard title={
        <div>
          血压超标列表
          <ButtonGroup style={{ float: 'right' }}>
            <Button type="ghost" key="1" onClick={() => refetchs()}>今天</Button>
            <Button type="ghost" key="2" onClick={() => refetchs('3days')}>最近三日</Button>
            <Button type="ghost" key="3" onClick={() => refetchs('7days')}>最近七日</Button>
            <Button type="ghost" key="4" onClick={() => refetchs('all')}>全部</Button>
          </ButtonGroup>
        </div>
    } >
        <span style={{ fontSize: '36px', color: '#b1b1b1' }}>{handleNums.handled}/</span><span style={{ fontSize: '36px', color: '#ff5200' }}>{handleNums.withoutHandle}</span> 已处理／待处理
        <OverproofTable
          {...props}
        />
      </BtnCard>
    </div>
  )
}

const BtnCard = styled(Card)`
  .ant-card-head-title {
    width:100%;
  }
`

BloodPressureOverproof.propTypes = {
  data: PropTypes.object.isRequired,
}
export default graphql(queryOverproof, {
  options: () => ({
    variables: {
      after: moment().startOf('day'),
    },
  }),
})(BloodPressureOverproof)
