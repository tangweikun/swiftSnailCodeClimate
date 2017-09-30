import React, { PropTypes } from 'react'
import styled from 'styled-components'
import UnmeasurePatientsItem from '../containers'

const UnmeasurePatients = props => (
  <CardContent>
    <UnmeasurePatientsItem
      timeChoose={'3'}
      {...props}
    />
    <UnmeasurePatientsItem
      timeChoose={'7'}
      {...props}
    />
    <UnmeasurePatientsItem
      timeChoose={'14'}
      {...props}
    />
  </CardContent>
)

const CardContent = styled.div`
  width: '100%';
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
`

UnmeasurePatients.propTypes = {
  data: PropTypes.object.isRequired,
}
export default UnmeasurePatients
