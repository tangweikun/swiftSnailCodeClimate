import React, { PropTypes } from 'react'
import find from 'lodash/find'
import cloneDeep from 'lodash/cloneDeep'
import omit from 'lodash/omit'
import { TabsLayout } from '../../../layout/patient-layout/components'
import { TitleLabel, TitleText } from './styled-components'
import { EmptyContent, SoapContent } from './Content'
import { Button } from './Button'
import { Tabs } from './Tabs'

class ViewModal extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    popupEditSoap: PropTypes.func.isRequired,
  }
  state = {
    activeSoapId: null,
  }

  changeActiveSoap(soapId) {
    this.setState({ activeSoapId: soapId })
  }
  render() {
    const title = (
      <div>
        <TitleLabel>随访周期</TitleLabel>
        <TitleText>-周</TitleText>
        <TitleLabel>下次随访日期</TitleLabel>
        <TitleText>----年--月--日</TitleText>
      </div>
    )

    const { SoapsForPatient, loading } = this.props.data

    const buttons = [
      <Button
        key="addSoap"
        icon="file-add"
        text="添加SOAP"
        onClick={() => this.props.popupEditSoap()}
      />,
    ]
    const activeSoapId = this.state.activeSoapId

    let content = EmptyContent({})
    if (!loading && SoapsForPatient.length) {
      const activeSoap = activeSoapId
        ? find(SoapsForPatient, { _id: activeSoapId })
        : SoapsForPatient[0]

      if (this.state.activeSoapId !== activeSoapId) {
        this.setState({ activeSoapId })
      }

      buttons.push(
        <Button
          key="editSoap"
          icon="edit"
          text="编辑"
          onClick={() => {
            const cloneSoap = cloneDeep(activeSoap)
            const washedSoap = {
              ...omit(cloneSoap, [
                '__typename',
                'patientId',
                'overdue',
                'category',
                'selectedAssessment',
              ]),
              createdBy: {
                ...omit(cloneSoap.createdBy, '__typename'),
              },
              severity: {
                ...omit(cloneSoap.severity, '__typename'),
              },
            }
            this.props.popupEditSoap(washedSoap)
          }}
        />,
      )
      content = SoapContent({ soap: activeSoap })
    }

    const menu = Tabs({
      soaps: SoapsForPatient,
      activeSoapId,
      onLableClick: soapId => activeSoapId !== soapId && this.changeActiveSoap(soapId),
    })

    return TabsLayout({ title, buttons, menu, content })
  }
}

export default ViewModal
