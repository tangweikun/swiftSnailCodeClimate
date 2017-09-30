import React, { PropTypes } from 'react'
import moment from 'moment'
import { Table, Card } from 'antd'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import { getRows, getStatistic } from './blood-pressure-format.js'
import { queryhistory } from '../actions'
import { withLoading } from '../../../common/withLoading'


const refetchs = ({ data, period, patientId }) => {
  if (period === 'all') {
    data.refetch({
      id: patientId,
      after: moment().subtract(50, 'years'),
    })
  } else if (period === '1month') {
    data.refetch({
      id: patientId,
      after: moment().subtract(1, 'months'),
    })
  } else if (period === '3months') {
    data.refetch({
      id: patientId,
      after: moment().subtract(3, 'months'),
    })
  } else {
    data.refetch({
      id: patientId,
      after: moment().subtract(7, 'days'),
    })
  }
}

const queryVariables = {
  options: props => ({
    variables: {
      id: props.patientId,
      after: moment().subtract(7, 'days'),
    },
  }),
}

class ShowHistoryTable extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.period === nextProps.period) return
    refetchs(nextProps)
  }
  render() {
    const { data } = this.props
    const history = data.me ? data.me.healthCareTeams[0].patient.bloodPressureMeasurements : []
    const safeRange = data.me ? data.me.healthCareTeams[0].patient.boundDetails : []
    const historyData = getRows(history)
    const statistic = getStatistic(history, safeRange)
    const setColor = (obj) => {
      const color = obj.colors.BPLEVEL.color
      switch (color) {
        case '#5EB300': {
          return 'bloodcolor1 rowBasic'
        }
        case '#F5A623': {
          return 'bloodcolor2 rowBasic'
        }
        case '#FA7252': {
          return 'bloodcolor3 rowBasic'
        }
        case '#E50037': {
          return 'bloodcolor4 rowBasic'
        }
        case '#AD1457': {
          return 'bloodcolor5 rowBasic'
        }
        case '#79B0EC:': {
          return 'bloodcolor6 rowBasic'
        }
        default:
          return 'bloodcolor1 rowBasic'
      }
    }
    const renderContent = (value, row) => {
      const obj = {
        children: '',
        props: {},
      }
      if (row.type) {
        obj.props.colSpan = 0
      } else {
        obj.children = `${value}`
        if (row.BloodPressureValue === value) {
          obj.props.className = setColor(row)
        }
      }
      return obj
    }
    const tableColumns = [
      {
        title: '时段',
        dataIndex: 'measurementSituation',
        key: 'measurementSituation',
        width: '120px',
        className: 'bloodTd',
        render(text, row) {
          if (text) {
            return {
              children: `${text}`,
            }
          }
          return {
            children: row.value,
            props: {
              colSpan: 7,
              className: 'dataRow',
            },
          }
        },
      }, {
        title: '血压值',
        dataIndex: 'BloodPressureValue',
        key: 'BloodPressureValue',
        width: '100px',
        className: 'bloodTd',
        render: renderContent,
      }, {
        title: '脉搏',
        dataIndex: 'pulse',
        width: '100px',
        className: 'bloodPulse rowBasic',
        key: 'pulse',
        render: renderContent,
      }, {
        title: '平均动脉压',
        width: '80px',
        className: 'bloodTd',
        dataIndex: 'average',
        key: 'average',
        render: renderContent,
      }, {
        title: '状态',
        dataIndex: 'noteLabel',
        key: 'noteLabel',
        width: '200px',
        className: 'bloodLable',
        render: renderContent,
      }, {
        title: '症状',
        dataIndex: 'noteSymptom',
        key: 'noteSymptom',
        width: '200px',
        className: 'bloodLable',
        render: renderContent,
      }, {
        title: '时间',
        width: '70px',
        className: 'bloodTd',
        dataIndex: 'measuredAt',
        key: 'measuredAt',
        render: renderContent,
      },
    ]
    return (
      <TableDiv>
        <Card className="totalCard">
          <CardDiv>
            <div>
              <StatisticsNums>{statistic.total}</StatisticsNums>
              <StatisticsText> 次测量</StatisticsText>
            </div>
            <div>
              <StatisticsNums>{statistic.overDiastolic}</StatisticsNums>
              <StatisticsText> 次收缩压超标</StatisticsText>
            </div>
            <div>
              <StatisticsNums>{statistic.overSystolic}</StatisticsNums>
              <StatisticsText> 次舒张压超标</StatisticsText>
            </div>
            <div>
              <StatisticsNums>{statistic.average}</StatisticsNums>
              <StatisticsText> 平均血压</StatisticsText>
            </div>
            <div>
              <StatisticsNums>{statistic.standard}</StatisticsNums>
              <StatisticsText> 达标率</StatisticsText>
            </div>
          </CardDiv>
        </Card>
        <Table
          className="tableBasic histroyTableTh tableTd"
          columns={tableColumns}
          dataSource={historyData}
          bordered
          pagination={{ pageSize: 10 }}
          useFixedHeader
        />
      </TableDiv>
    )
  }
}
const TableDiv = styled.div`
  float: center;
`
const CardDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const StatisticsNums = styled.span`
  padding
  color: #26344b;
  font-family: HelveticaNeue;
  font-size: 18px;
`
const StatisticsText = styled.span`
  font-family: PingFangSC-Regular;
  color: #666666;
  font-size: 12px;
`

ShowHistoryTable.propTypes = {
  data: PropTypes.object.isRequired,
  period: PropTypes.string.isRequired,
}
export default graphql(queryhistory, queryVariables)(withLoading(ShowHistoryTable))
