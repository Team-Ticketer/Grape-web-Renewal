import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

import MainContainer from "./container/MainContainer"
import Payment from './container/Payment'

const renderRoutes = RootComponent => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <RootComponent>
          <Route path="/" component={MainContainer} exact/>
        </RootComponent>
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default renderRoutes
