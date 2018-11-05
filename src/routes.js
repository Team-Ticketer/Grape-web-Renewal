import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import store from './store'

const history = syncHistoryWithStore(browserHistory, store)

import MainContainer from "./container/MainContainer"
import Payment from './container/Payment'

if (DEV) {
  window.browserHistory = browserHistory
}

const renderRoutes = RootComponent => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <RootComponent>
          <Route path="/" component={MainContainer} exact/>
          <Route path="/payment" component={Payment} exact/>
        </RootComponent>
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default renderRoutes
