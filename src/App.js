// @flow
import React from 'react'
import { Route } from 'react-router-dom'

// Styles
import 'normalize.css/normalize.css'
import './variables.css'
import './App.css'

// Routes
import routes from './routes'

// Components
import { NavigationBar } from './components/navigation-bar'

export default () => (
  <div className="App">
    <NavigationBar />
    <main className="wrapper">
      {routes.map((route, index) => <Route key={index} {...route} />)}
    </main>
  </div>
)
