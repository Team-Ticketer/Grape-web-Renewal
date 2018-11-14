import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Main , Login , Concerts, DetailPost, MakeConcert } from './container/index';

import store from './core/redux/store';


const renderRoutes = RootComponent => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <RootComponent>
          <Route path='/' component={Main} exact/>
          <Route path='/login' component={Login} exact/>
          <Route path='/concerts' component={Concerts} exact/>
          <Route path='/concert/:post' component={DetailPost} exact/>
          <Route path='/make/1' component={MakeConcert} exact/>
        </RootComponent>
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default renderRoutes
