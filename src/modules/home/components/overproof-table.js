import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Table } from 'antd'
import getRows from './format-table-data.js'

const OverproofTable = (props) => {
  const { popupAddOperation, data } = props
  const tableData = data.me ? getRows(data.me.healthCareTeams[0]) : []
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
        return 'bloodcolor1'
    }
  }
  function renderAction(text, row) {
    const obj = {
      children: '',
      props: {},
    }
    if (row.type) {
      obj.props.colSpan = 0
    } else if (row.BloodPressureValue === text) {
      obj.children = `${text}`
      obj.props.className = setColor(row)
    } else if (row.state === text) {
      if (row.state) {
        obj.children = <handleButton className="rowhandle" onClick={() => popupAddOperation(row)} >已处理</handleButton>
      } else {
        obj.children = <handleButton className="handleButton" onClick={() => popupAddOperation(row)} >处理</handleButton>
      }
    } else {
      obj.children = `${text}`
    }
    return obj
  }
  const tableColumns = [
    {
      title: '名字',
      dataIndex: 'fullName',
      key: 'fullName',
      width: '100px',
      className: 'bloodTd',
      render(text, row) {
        if (text) {
          return <a href={`/patient/${row.patientId}/blood-pressure`}>{text}</a>
        }
        return {
          children: row.value,
          props: {
            colSpan: 6,
            className: 'dataRow',
          },
        }
      },
    }, {
      title: '测量值',
      dataIndex: 'BloodPressureValue',
      key: 'BloodPressureValue',
      width: '80px',
      className: 'bloodTd',
      render: renderAction,
    }, {
      title: '测量时间',
      width: '100px',
      className: 'bloodTd',
      dataIndex: 'measuredAt',
      key: 'measuredAt',
      render: renderAction,
    }, {
      title: '电话号码',
      dataIndex: 'mobile',
      key: 'mobile',
      className: 'bloodTd',
      width: '100px',
      render: renderAction,
    }, {
      title: '处理结果',
      dataIndex: 'handleResult',
      key: 'handleResult',
      className: 'bloodResult',
      render: renderAction,
    }, {
      title: '操作',
      dataIndex: 'state',
      width: '60px',
      className: 'rowhandle',
      key: 'state',
      render: renderAction,
    },
  ]
  return (
    <div>
      <Table
        className="tableTh tableTd tableStyle"
        columns={tableColumns}
        dataSource={tableData}
        bordered
        pagination={{ pageSize: 11 }}
        useFixedHeader
      />
    </div>
  )
}
const handleButton = styled.div

OverproofTable.propTypes = {
  popupAddOperation: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}
export default OverproofTable
