// @flow
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// Utils
import { getFeed } from './utils'

// Styles
import 'normalize.css/normalize.css'
import './variables.css'
import './App.css'

// Components
import { ISSLiveStream } from './components/iss-live-stream'
import { NewsList } from './components/news-list'
import { NavigationBar } from './components/navigation-bar'

class App extends Component {
  state = {
    itemList: []
  }

  componentWillMount() {
    getFeed().then((data) => this.setState({ itemList: data}))
  }

  render() {
    const { itemList } = this.state
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <main className="wrapper">
            <Route exact path="/" component={NewsList(itemList)} />
            <Route path="/iss-live" component={ISSLiveStream} />
          </main>
        </div>
      </Router>
    )
  }
}

export default App
