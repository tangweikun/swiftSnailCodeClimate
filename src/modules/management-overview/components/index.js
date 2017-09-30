import React, { PropTypes } from 'react'
import { Card } from 'antd'
import WeeklyPatients from './weekly-patients.js'
import UnmeasurePatients from './unmeasure-patients.js'

const ManagementOverview = () => (
  <div style={{ width: '100%' }}>
    <Card title="管理概况" bordered>
      <WeeklyPatients />
      <UnmeasurePatients />
    </Card>
  </div>
  )


ManagementOverview.propTypes = {
  data: PropTypes.object.isRequired,
}
export default ManagementOverview
