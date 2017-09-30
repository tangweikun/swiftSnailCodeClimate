import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Icon, Avatar, Row, Col } from 'antd'
import get from 'lodash/get'
import { SHOW_INFOS } from '../constants/profile'

const PatientProfile = (props) => {
  const patient = get(props, 'data.me.healthCareTeams[0].patient', {})
  const boundDetails = get(props, 'data.me.healthCareTeams[0].patient.boundDetails', {})
  const { avatar, fullName } = patient
  const isStarred = get(patient, 'boundDetails.isStarred')
  return (
    <div>
      <Header>
        <AvatarZone>
          <Avatar size="large" src={avatar} />
          <Favorite>
            <CustomizeIcon type={isStarred ? 'star' : 'star-o'} isStarred={isStarred} />
          </Favorite>
        </AvatarZone>
        <Name>
          {fullName}
        </Name>
        <AdditionalZone>
          <DoctorInfo>
            <DoctorLabel>管理医生</DoctorLabel>
            <span>
              {props.doctorName}
            </span>
          </DoctorInfo>
          <CustomizeIcon type="edit" onClick={() => props.popupEditPatient(patient)} />
          <CustomizeIcon type="message" onClick={props.openChatRoom} />
        </AdditionalZone>
      </Header>
      <Body>
        {SHOW_INFOS.map((info) => {
          const { isPatient } = info
          const tempObj = info
          tempObj.parent = isPatient ? patient : boundDetails
          return tempObj
        }).map(info =>
          (<Attribute>
            <LABEL span={info.colSpan[0]}>
              {info.label}
            </LABEL>
            <VALUE span={info.colSpan[1]}>
              {info.parent[info.property] && info.getValue(info.parent[info.property])}
            </VALUE>
          </Attribute>),
        )}
      </Body>
    </div>
  )
}

PatientProfile.propTypes = {
  popupEditPatient: PropTypes.func.isRequired,
  openChatRoom: PropTypes.func.isRequired,
  doctorName: PropTypes.string,
}

const DoctorInfo = styled.div`line-height: 30px;`

const DoctorLabel = styled.span`
  color: ${props => props.theme.profile.color.LABEL};
  margin-right: 5px;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
`

const AvatarZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 18px 10px 9px;
`

const Favorite = styled.span`
  height: 60px;
  line-height: 60px;
  position: absolute;
  left: 70%;
`

const Name = styled.div`
  font-weight: bold;
  font-size: ${props => props.theme.general.size.LARGER};
`

const AdditionalZone = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`

const Body = styled.div`width: 100%;`

const Attribute = styled(Row)`
  border-top: solid 1px ${props => props.theme.profile.color.BORDER};
  padding: 5px 10px;
`

const LABEL = styled(Col)`
  color: ${props => props.theme.profile.color.LABEL};
`

const VALUE = styled(Col)`
  color: ${props => props.theme.profile.color.VALUE};
  font-weight: 400;
  font-family: PingFangSC-Regular;
`

const CustomizeIcon = styled(Icon)`
  font-size: ${props => props.theme.general.size.LARGER};
  color: ${props => (props.isStarred ? '#0cc4bb' : '#979797')};
  margin: 7px 8px;
`

export default PatientProfile
