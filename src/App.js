// @flow
import React, { Component } from 'react'
import './App.css'
import 'normalize.css/normalize.css'

// Components
import { Item } from './components/item'
import { NavigationBar } from './components/navigation-bar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <main className="app-wrapper">
          <Item />
        </main>
      </div>
    )
  }
}

export default App
