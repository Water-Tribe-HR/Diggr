/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom'; // useLocation was here
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import { oktaConfig } from '../oktaConfig';
import Home from './views/Home';
import Login from './views/Login';
import Discover from './views/Discover';
import PackFeed from './views/PackFeed';
import PlaydateCalendar from './views/Calendar';
import Profile from './views/Profile';
import './App.css';
import Navbar from './components/Navbar/Navbar';

const oktaAuth = new OktaAuth(oktaConfig.oidc);

const App = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '', window.location.origin));
  };

  const CALLBACK_PATH = '/login/callback';

  return (
    <div className="App">
      <header className="App-header">
        <Security
          oktaAuth={oktaAuth}
          onAuthRequired={customAuthHandler}
          restoreOriginalUri={restoreOriginalUri}
        >
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route exact path="/login" render={() => <Login />} />
          <Route path={CALLBACK_PATH} componenet={LoginCallback} />
          <SecureRoute path="/discover" render={() => <Discover />} />
          <SecureRoute path="/calendar" render={() => <PlaydateCalendar />} />
          <SecureRoute path="/packFeed" render={() => <PackFeed />} />
          <SecureRoute path="/profile" render={() => <Profile />} />
        </Security>
      </header>
    </div>
  );
};

export default App;
