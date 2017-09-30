import React from 'react'
import ReactEcharts from 'echarts-for-react'
import styled from 'styled-components'

const Bloodchart = () => {
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
          length: 10,
          lineStyle: {
            color: 'red',
          },
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
            const tickArr = [40, 60, 80, 100, 120, 140]
            return tickArr[index]
          },
        },
      },
      series: [
        {
          name: '收缩压',
          type: 'line',
          lineStyle: {
            normal: {
              color: '#b7e021',
              width: '1',
            },
          },
          itemStyle: {
            normal: {
              color: '#b7e021',
              width: '1',
            },
          },
          areaStyle: {
            normal: {
              color: '#eaf5bc',
            },
          },
          data: [60, 76, 68, 84, 80, 75, 62],
        },
        {
          name: '舒张压',
          type: 'line',
          lineStyle: {
            normal: {
              color: '#2498d2',
              width: '1',
            },
          },
          itemStyle: {
            normal: {
              color: '#2498d2',
              width: '1',
            },
          },
          areaStyle: {
            normal: {
              color: '#bde1f2',
            },
          },
          data: [45, 50, 43, 53, 49, 52, 46],
        },
        {
          name: '平均动脉压',
          type: 'line',
          symbol: 'none',
          lineStyle: {
            normal: {
              color: '#b4a1dd',
              width: '1',
            },
          },
          itemStyle: {
            normal: {
              color: '#b4a1dd',
              width: '1',
            },
          },
          data: [80, 100, 98, 130, 120, 130, 90],
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
        <InfoMusk>
          <Num1 />
          <span
            style={{
              display: 'block',
              marginRight: '8px',
              float: 'left',
              opacity: '0.54',
              fontSize: '12px',
              color: '#000',
            }}
          >
            收缩压
          </span>
          <Num2 />
          <span
            style={{
              display: 'block',
              marginRight: '8px',
              float: 'left',
              opacity: '0.54',
              fontSize: '12px',
              color: '#000',
            }}
          >
            舒张压
          </span>
          <Num3 />
          <span
            style={{
              display: 'block',
              marginRight: '8px',
              float: 'left',
              opacity: '0.54',
              fontSize: '12px',
              color: '#000',
            }}
          >
            平均动脉压
          </span>
        </InfoMusk>
      </Musk>
    </div>
  )
}

const Musk = styled.div`
  width: 321px;
  height: 163px;
  position: relative;
`
const InfoMusk = styled.div`
  width: 230px;
  height: 14px;
  position: absolute;
  left: 32px;
  line-height: 12px;
  font-size: 12px;
  bottom: -8px;
`
const Num1 = styled.div`
  float: left;
  width: 12px;
  height: 12px;
  background-color: #eaf5bc;
  border: solid 1px #b7de26;
  margin-right: 6px;
`
const Num2 = styled.div`
  float: left;
  width: 12px;
  height: 12px;
  background-color: #bde1f2;
  border: solid 1px #289ad2;
  margin-right: 6px;
`
const Num3 = styled.div`
  float: left;
  width: 12px;
  height: 12px;
  border: solid 1px #b4a1dd;
  margin-right: 6px;
`
export default Bloodchart
