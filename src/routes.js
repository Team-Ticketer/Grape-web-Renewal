import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Main } from './container/index';

import store from './store'


const renderRoutes = RootComponent => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <RootComponent>
          <Route path='/' compoent={Main} exact/>
        </RootComponent>
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default renderRoutes
