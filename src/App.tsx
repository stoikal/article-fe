import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import Login from './features/login/Login';
import Register from './features/register/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/articles">
            <div>
              articles
            </div>
          </Route>
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
