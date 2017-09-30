import React, { PropTypes } from 'react'
import { Card, Button, Row, Col } from 'antd'
import styled from 'styled-components'
import NoDataPage from './NoDataPage'
import CaseRecord from './CaseRecord'
import { TabsLayout } from '../../../layout/patient-layout/components'
import Bloodchart from '../../blood-pressure/components/chart-blood-pressure.js'
import Pulsechart from '../../blood-pressure/components/chart-pulse-trend.js'

const ViewModal = (props) => {
  const { caseRecordsForPatient = [] } = props.data
  const { popupEditCaseRecord } = props
  const btns = [
    <Btn ghost icon="file-add" onClick={() => popupEditCaseRecord(caseRecordsForPatient)}>
      新病历
    </Btn>,
  ]

  if (caseRecordsForPatient && caseRecordsForPatient.length > 0) {
    btns.push(
      <Btn ghost icon="edit" onClick={() => popupEditCaseRecord(caseRecordsForPatient)}>
        编辑
      </Btn>,
    )
  }

  return (
    <Row>
      <Col span={16}>
        <TabsLayout
          buttons={btns}
          content={
            caseRecordsForPatient && caseRecordsForPatient.length > 0 ? (
              <CaseRecord content={caseRecordsForPatient} />
            ) : (
              <NoDataPage popupEditCaseRecord={popupEditCaseRecord} />
            )
          }
        />
      </Col>
      <Col span={8}>
        <ChartBox>
          <Card
            bordered
            style={{ marginBottom: '10px' }}
            title={
              <div>
                <span style={{ fontSize: '14px' }}>血压趋势</span>
                <span
                  style={{
                    fontSize: '14px',
                    marginLeft: '8px',
                    color: 'gray',
                    fontWeight: 'normal',
                  }}
                >
                  (自2017年8月12日至今)
                </span>
              </div>
            }
          >
            {<Bloodchart />}
          </Card>
          <Card
            bordered
            style={{ marginBottom: '10px' }}
            title={
              <div>
                <span style={{ fontSize: '14px' }}>脉搏趋势</span>
                <span
                  style={{
                    fontSize: '14px',
                    marginLeft: '8px',
                    color: 'gray',
                    fontWeight: 'normal',
                  }}
                >
                  (自2017年8月12日至今)
                </span>
              </div>
            }
          >
            {<Pulsechart />}
          </Card>
        </ChartBox>
      </Col>
    </Row>
  )
}
ViewModal.propTypes = {
  data: PropTypes.object.isRequired,
  popupEditCaseRecord: PropTypes.func.isRequired,
}

const Btn = styled(Button)`
  color: #fff;
  border: none;
  padding-right: 0px;
`
const ChartBox = styled.div`margin-left: 20px;`

export default ViewModal
