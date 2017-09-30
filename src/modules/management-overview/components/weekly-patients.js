import React from 'react'
import { graphql } from 'react-apollo'
import moment from 'moment'
import get from 'lodash/get'
import forOwn from 'lodash/forOwn'
import countBy from 'lodash/countBy'
import ReactEcharts from 'echarts-for-react'
import styled from 'styled-components'
import { queryPatientsAndOverproof } from '../actions'


const WeeklyPatients = (props) => {
  const patientsList = get(props, 'data.me.healthCareTeams[0].patients', [])
  const overproof = get(props, 'data.me.healthCareTeams[0].overproofPatients', [])
  let activePatient = 0
  let overproofPatientsNums = 0
  if (overproof.length > 0) {
    const asd = countBy(overproof, 'patientId')
    forOwn(asd, () => { overproofPatientsNums += 1 })
  }
  if (patientsList.length > 0) {
    const groupPatients = countBy(patientsList, item => item.bloodPressureMeasurements.length)
    activePatient = groupPatients['0'] ? patientsList.length - groupPatients['0'] : 0
  }
  const percentage = activePatient ?
  `${Math.round((overproofPatientsNums / activePatient) * 100)}%` : ''
  function getOption() {
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      title: {
        text: '7日超标率',
        top: 'bottom',
        left: 'center',
        padding: [10, 10, 23, 10],
        textStyle: {
          fontSize: 12,
          color: '#666666',
          lineHeight: 17,
          fontFamily: 'PingFangSC-Regular',
        },
      },
      series: [
        {
          name: '7日超标率',
          type: 'pie',
          radius: ['30%', '80%'],
          color: ['#ff5200', '#1b9a82'],
          avoidLabelOverlap: true,
          label: {
            normal: {
              position: 'inner',
              fontSize: 12,
              color: '#ffffff',
            },
          },
          itemStyle: {
            normal: {
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0)',
            },
          },
          data: [
            { value: overproofPatientsNums,
              name: percentage,
            },
            { value: activePatient - overproofPatientsNums },
          ],
        },
      ],
    }
  }
  return (
    <CardContent>
      <LeftGeneralPart>
        <div>
          <span style={{ display: 'block' }}><span style={{ fontSize: '32px' }}>{patientsList.length}</span>人</span>
            收治患者总数
        </div>
        <div>
          <span style={{ display: 'block' }}><span style={{ fontSize: '32px' }}>{activePatient}</span>人</span>
            7日内有测量
        </div>
      </LeftGeneralPart>
      <div style={{ alignSelf: 'flex-end', paddingBottom: '18px' }}>
        <span style={{ display: 'block' }}><span style={{ fontSize: '32px' }}>{overproofPatientsNums}</span>人</span>
        7日内血压超标
      </div>
      <ReactEcharts
        style={{ height: '200px', width: '150px' }}
        option={getOption()}
      />
    </CardContent>
  )
}

const CardContent = styled.div`
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #cfcfcf;
  display: flex;
  justify-content: space-between;
`

const LeftGeneralPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 18px;
`

export default graphql(queryPatientsAndOverproof, {
  options: () => ({
    variables: {
      after: moment().subtract(7, 'days'),
    },
  }),
})(WeeklyPatients)
