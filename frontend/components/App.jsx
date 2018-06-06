import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';

import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      

    </header>

    <Switch>
      <Route path="/signup" component={SignupContainer} />
      <Route path="/login" component={LoginContainer} />
    </Switch>



  </div>
);

export default App;
