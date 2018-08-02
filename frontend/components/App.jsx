import React from 'react';
import HomeContainer from './session/home_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';

import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>


    </header>

    <Switch>
      <Route path="/" component={HomeContainer} />
      <Route path="/signup" component={SignupContainer} />
      <Route path="/login" component={LoginContainer} />

    </Switch>



  </div>
);

export default App;
