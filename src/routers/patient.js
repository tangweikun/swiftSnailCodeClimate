import React, { PropTypes } from 'react'
import { Route, Switch } from 'react-router-dom'
import PatientLayout from '../layout/patient-layout/containers'
import asyncComponent from '../common/asyncComponent'

// const getComponent = dirPath =>
// asyncComponent(() => import(`../modules/${dirPath}`).then(module => module.default))

const BloodPressure = asyncComponent(() => import('../modules/blood-pressure/containers').then(module => module.default))
const MedicalHistory = asyncComponent(() => import('../modules/medical-history/containers/ViewModal').then(module => module.default))
const CaseRecord = asyncComponent(() => import('../modules/case-record/containers/ViewModal').then(module => module.default))
const FollowUpSoap = asyncComponent(() => import('../modules/follow-up-soap').then(module => module.default))

const routes = [
  {
    path: '/blood-pressure',
    component: BloodPressure,
  },
  {
    path: '/medical-history',
    component: MedicalHistory,
  },
  {
    path: '/case-record',
    component: CaseRecord,
  },
  {
    path: '/follow-up-soap',
    component: FollowUpSoap,
  },
]

// https://github.com/ReactTraining/react-router/pull/5430
// When swith the patient details, the profile will refetch always
// It's the react-router v4 bug, it will release later.
// #4578
const PatientRouter = ({ match }) => (
  <Switch>
    {
      routes.map(({ path, exact, strict, component: Comp }) =>
        (<Route
          key={path}
          path={`${match.url}${path}`}
          exact={exact}
          strict={strict}
          render={
            props => (
              <PatientLayout {...props}>
                <Comp {...props} />
              </PatientLayout>
            )
          }
        />),
      )
    }
  </Switch>
)

PatientRouter.propTypes = {
  match: PropTypes.object.isRequired,
}
export default PatientRouter
