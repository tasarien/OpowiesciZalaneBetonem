import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/login';
import MainView from './components/main_view/main_view'
import PrivateRoute from './components/dashboard/private_route';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
          <PrivateRoute {...props} path='/betoniarka' component={Dashboard}/>
          <Route path='/login' {...props} component={Login}/>
          <Route path='/home'>
            <MainView {...props} />
          </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
