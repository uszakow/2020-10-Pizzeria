import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import Menu from './conteners/Menu';
import Home from './components/Home/Home';
import Login from './conteners/Login';
import User from './conteners/User';
import Pizza from './components/Pizza/Pizza';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Menu />

          <Switch>
            <Route exact path="/" render={Home} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/user" render={() => <User />} />
            <Route path="/menu" render={() => <Pizza />} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider >
  );
}

export default App;
