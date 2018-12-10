/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import { Switch, Route } from 'react-router-dom'
import React from 'react'

import HomePage from 'containers/HomePage/Loadable'
import LandingPage from 'containers/LandingPage/Loadable'
import LoginPage from 'containers/LoginPage/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'
import RegisterPage from 'containers/RegisterPage/Loadable'

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
}
