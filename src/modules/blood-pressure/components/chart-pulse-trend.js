import React from 'react'
import ReactEcharts from 'echarts-for-react'
import styled from 'styled-components'

const Pulsechart = () => {
  function getOption() {
    return {
      tooltip: {
        trigger: 'axis',
      },
      toolbox: {
        show: true,
        feature: {
          type: 'line',
        },
      },
      xAxis: {
        type: 'category',
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
          // length: 10,
        },
        boundaryGap: false,
        data: [],
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
          length: 10,
        },
        axisLabel: {
          formatter(value, index) {
            const tickArr = [45, 55, 65, 75, 85]
            return tickArr[index]
          },
        },
      },
      series: [
        {
          type: 'line',
          lineStyle: {
            normal: {
              color: '#8f0f1f',
              width: '1',
            },
          },
          itemStyle: {
            normal: {
              color: '#8f0f1f',
              width: '1',
            },
          },
          data: [20, 30, 10, 32, 33, 27, 21],
        },
      ],
    }
  }
  return (
    <div>
      <Musk>
        <ReactEcharts
          option={getOption()}
          style={{ height: '250px', width: '100%', position: 'absolute', left: '0', top: '-54' }}
          className="react_for_echarts"
        />
      </Musk>
    </div>
  )
}
export const Musk = styled.div`
  width: 321px;
  height: 163px;
  position: relative;
`
export default Pulsechart
