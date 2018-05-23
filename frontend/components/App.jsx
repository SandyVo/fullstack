import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';

import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>Instagram</h1>

    </header>

    <Switch>
      <Route path="/signup" component={SignupContainer} />
      <Route path="/login" component={LoginContainer} />
    </Switch>


    <GreetingContainer />

  </div>
);

export default App;
