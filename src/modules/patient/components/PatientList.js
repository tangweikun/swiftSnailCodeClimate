import React, { PropTypes } from 'react'
import { Tabs } from 'antd'
import { graphql } from 'react-apollo'
import get from 'lodash/get'
import debounce from 'lodash/debounce'
import { PatientListContainer, PatientListHeader, TabsWithStyle } from './styled-component'
import ListItem from './ListItem'
import queryPatients from '../actions/patientList'
import SearchPatientList from './SearchPatientList'

const TabPane = Tabs.TabPane

const tabs = [{ title: '重点关注', key: 'isStarred' }, { title: '其他患者', key: 'noStarred' }]

class PatientList extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    togglePatientSider: PropTypes.func.isRequired,
    setActivePatient: PropTypes.func.isRequired,
  }
  state = {
    searchPatientList: [],
    isSearch: false,
  }
  handlePatientClick = (patient) => {
    const { togglePatientSider, setActivePatient, history } = this.props
    const patientId = patient._id
    togglePatientSider()
    setActivePatient(patientId)
    history.push(`/patient/${patientId}/blood-pressure`)
  }
  handlePatientsSearch = debounce((searchInput) => {
    const patientList = get(this.props, 'data.me.healthCareTeams[0].patients', [])
    let searchPatientList = []
    if (searchInput) {
      searchPatientList = patientList.filter(o => o.fullName.indexOf(searchInput) !== -1)
    }
    this.setState({ searchPatientList, isSearch: !!searchInput })
  }, 500)

  render() {
    const { loading } = this.props.data
    let patientList = []
    if (!loading) {
      patientList = get(this.props, 'data.me.healthCareTeams[0].patients', [])
    }
    const { searchPatientList, isSearch } = this.state
    console.log(this.state.searchPatientList, 'Searching')
    return (<PatientListContainer>
      <PatientListHeader
        handlePatientsSearch={this.handlePatientsSearch}
        {...this.props}
      />
      {
        isSearch ? <SearchPatientList
          patientList={searchPatientList}
          handlePatientClick={this.handlePatientClick}
        />
        : <TabsWithStyle defaultActiveKey="isStarred">
          {
            tabs.map(tab => (<TabPane tab={tab.title} key={tab.key}>
              {
                !!patientList.length &&
                  patientList.filter((o) => {
                    if (tab.key === 'isStarred') {
                      return o.boundDetails && o.boundDetails.isStarred
                    }
                    return o.boundDetails && !o.boundDetails.isStarred
                  }).map(patient =>
                    (<ListItem
                      key={patient._id}
                      patient={patient}
                      switchPatient={() => this.handlePatientClick(patient)}
                    />),
                )
              }
            </TabPane>))
          }
        </TabsWithStyle>
      }
    </PatientListContainer>)
  }
}

export default graphql(queryPatients)(PatientList)
