import React, { PropTypes } from 'react'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import isEqual from 'lodash/isEqual'
import { getUserInfo, queryUser } from '../actions'

import MainLayoutComponent from '../components'

class MainLayoutContainer extends React.Component {
  static propTypes = {
    getUserInfo: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
  }
  componentWillReceiveProps(nextProps) {
    const { me, loading } = nextProps.data
    if (!loading && !isEqual(nextProps.data, this.props.data)) {
      nextProps.getUserInfo(me)
    }
  }
  render() {
    return <MainLayoutComponent {...this.props} />
  }
}

const MainLayout = connect(
  null,
  {
    getUserInfo,
  },
)(graphql(queryUser)(MainLayoutContainer))

export default MainLayout
