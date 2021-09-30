/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { useState } from 'react';
import Homepage from './pages/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'firebase';
import Register from './pages/Register';
import PrivateRoute from './PrivateRoute';

// @ts-ignore
export const UserContext = React.createContext();

function App() {

  const app = initializeApp(firebaseConfig);

  const [user, setUser] = useState({});

  return (
    <Router>
      <UserContext.Provider value={[user, setUser]}>
        <Switch>
          <PrivateRoute path="/register">
            <Register></Register>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/'>
            <Homepage></Homepage>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
