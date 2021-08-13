import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Counter } from './components/counter/Counter';
import Login from './components/login/Login';
import Register from './components/register/Register';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* TODO remove Counter route and component */}
          <Route path="/counter">
            <Counter />
          </Route>
          <PrivateRoute path="/articles">
            <div>
              article list here....
            </div>
          </PrivateRoute>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
