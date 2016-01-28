import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import Route from 'react-router'
import IndexRoute from 'react-router'
import {RelayRouter} from 'react-router-relay'
import Application from './containers/Application';
import ViewerQueries from './queries/ViewerQueries'

import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render(
  <RelayRouter history={appHistory}>
    <Route path="/" component={Application} queries={ViewerQueries}>
      <IndexRoute component={Application} queries={ViewerQueries} />
    </Route>
  </RelayRouter>,
  document.getElementById('container')
)
