// React的主体
import React, { PropTypes } from 'react'
// Tabs标签
import { Tabs } from 'antd'
import Moment from 'moment'
import styled from 'styled-components'
// 所有的药物信息
import { Medicines } from '../constants'

// TabPane
const TabPane = Tabs.TabPane

const MedicalDetails = (props) => {
  const { content } = props
  console.log('content')
  console.log(JSON.stringify(content))
  const aa = Medicines
  if (aa) {
    console.log(1)
    console.log(content._id)
  }
  return (
    <ContentContainer>
      <Tabs tabPosition="left" style={{ height: 'calc(100vh - 192px)', minHeight: '500px' }}>
        {content.map(c => (
          <TabPane
            tab={new Moment(c.caseRecordDate).format('YYYY-MM-DD')}
            key={c._id}
            style={{ background: 'white' }}
          >
            <Root>
              <Row>
                <Label>主诉：</Label>
                <Content>{c.patientDesc.description}</Content>
              </Row>
              <DashedLine />
              <Row>
                <Label>查体：</Label>
                <Content>{c.bodyCheckup.description}</Content>
              </Row>
              <DashedLine />
              <Row>
                <Label>检验：</Label>
                <Content>{c.laboratoryTests.description}</Content>
              </Row>
              <DashedLine />
              <Row>
                <Label>诊断：</Label>
                <Content>{c.diagnosis.description}</Content>
              </Row>
              <DashedLine />
              <Row>
                <Label>处方：</Label>
                <Content>
                  {c.prescription.medicines.map(mdc => (
                    <div>
                      <div>{mdc.name}</div>
                      <div>{mdc.frequency}</div>
                      <div>{mdc.quantity}</div>
                      <div>{mdc.unit}</div>
                    </div>
                  ))}
                </Content>
              </Row>
            </Root>
          </TabPane>
        ))}
      </Tabs>
    </ContentContainer>
  )
}

export const Root = styled.div`
  background-color: white;
  display: flex;
  flex: 1;
  justify-content: stretch;
  flex-direction: column;
`
export const Row = styled.div`
  // background-color: blue;
  flex: 1 1;
  display: flex;
`
export const Label = styled.div`
  // background-color: green;
  flex: 0 0 50px;
  font-family: PingFangSC;
  font-size: 12px;
  font-weight: 600;
  color: black;
`
export const Content = styled.div`
  // background-color: gray;
  flex: 1;
  font-family: PingFangSC;
  font-size: 12px;
  text-align: left;
  color: #666666;
`

MedicalDetails.propTypes = {
  content: PropTypes.object,
}

const ContentContainer = styled.div`
  flex: 1;
  background-color: white;
  > .ant-tabs > .ant-tabs-bar {
    .ant-tabs-nav-container {
      background-color: #5a7394;
      .ant-tabs-tab-prev {
        background-color: rgba(233, 235, 239, 0.2) !important;
      }
      .ant-tabs-tab-next {
        background-color: rgba(233, 235, 239, 0.2) !important;
        right: 0px;
      }
      .ant-tabs-tab {
        margin-bottom: 0px;
        background-color: rgba(233, 235, 239, 0.2) !important;
        border: 1px solid rgba(233, 235, 239, 0) !important;
        color: #fff;
        width: 120px;
        &:hover {
          background-color: rgba(233, 235, 239, 0.4) !important;
        }
      }

      .ant-tabs-tab-active {
        margin-bottom: 0px;
        background-color: #fff !important;
        color: #26344b !important;
        width: 120px;
        &:hover {
          background-color: #e9ebef !important;
        }
      }
    }
  }
  .ant-tabs-content {
    background-color: white;
    padding: 16px 11px;
  }
`

export const ContentLabel = styled.div`
  font-size: 14px;
  color: #39475b;
  margin-bottom: 14px;
`

// export const Content = styled.div`
//   font-size: 12px;
//   color: ${props => props.theme.general.color.TITLE};
//   white-space: pre-wrap;
// `

export const DashedLine = styled.div`
  border-bottom: 1px dashed #ccc;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  margin: 20px 0;
`

export default MedicalDetails
