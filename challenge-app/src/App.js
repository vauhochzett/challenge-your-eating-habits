import React, { Component } from 'react';
import HomePage from './Pages/HomePage/HomePage'
import CreatePage from './Pages/CreatePage/CreatePage'
import ProfilePage from "./Pages/ProfilePage/ProfilePage";


import './App.css';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route
                path='/home'
                render={(props) => <HomePage {...props} />}
            />
            <Route
                path='/create'
                render={(props) => <CreatePage {...props} />}
            />
            <Route
                path='/profile'
                render={(props) => <ProfilePage {...props} />}
            />
        </Switch>
    );
  }
}

export default App;
