import React from 'react'
import { Card, Col, Row, Button } from 'antd'
import BloodPressureOverproof from './blood-pressure-overproof.js'
import ManagementOverview from '../../management-overview/components'

const HomeView = props => (
  <div style={{ padding: '20px' }}>
    <h2>Welcome to 301</h2>
    <Row gutter={22}>
      <Col span={6}>
        <ManagementOverview />
      </Col>
      <Col span={6}>
        <Card title="Card title" bordered={false}>Card content</Card>
      </Col>
      <Col span={10}>
        <BloodPressureOverproof
          {...props}
        />
      </Col>
    </Row>
    <Button type="primary">Button</Button>
  </div>
  )

export default HomeView
