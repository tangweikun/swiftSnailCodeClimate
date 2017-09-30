import React from 'react'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import theme from '../themes/theme'

const getUri = () => {
  const env = process.env.NODE_ENV
  console.log('process.env', process.env)
  const maps = {
    production: 'https://dodgy-dove.301-stg.ihealthcn.com/graphql',
  }
  return maps[env] || 'http://localhost:3081/graphql'
}

const httpNetworkInterface = createNetworkInterface({
  // uri: 'http://localhost:3081/graphql',
  uri: getUri(),
})

httpNetworkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}  // Create the header object if needed.
    }
    req.options.headers['client-codename'] = 'TEST'
    req.options.headers['Access-Control-Allow-Origin'] = '*'
    req.options.headers.authorization =
    localStorage.getItem('token') ? localStorage.getItem('token') : ''
    next()
  },
}])
const wsUri = process.env.NODE_ENV === 'production' ? 'wss://dodgy-dove.301-stg.ihealthcn.com/feedback' : 'ws://localhost:3081/feedback'
const subscriptionClient = new SubscriptionClient(wsUri, {
  reconnect: true,
  connectionParams: {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
  },
})

const networkInterface = addGraphQLSubscriptions(
  httpNetworkInterface,
  subscriptionClient,
)

const client = new ApolloClient({
  networkInterface,
})
const history = createBrowserHistory()

export default class Main extends React.Component {
  static propTypes = {
    store: PropTypes.any.isRequired,
    routes: PropTypes.any.isRequired,
  }
  shouldComponentUpdate() {
    return false
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <div style={{ height: '100%' }}>
              <Router history={history} children={this.props.routes} />
            </div>
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    )
  }
}
