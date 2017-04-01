// @flow
import React, { Component } from 'react'

// Utils
import { getFeed } from './utils'

// Styles
import './App.css'
import 'normalize.css/normalize.css'

// Components
import { ISSLiveStream } from './components/iss-live-stream'
import { Item } from './components/item'
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
      <div className="App">
        <NavigationBar />
        <main className="app-wrapper">
          <ISSLiveStream />
          {itemList.map((item) => <Item key={item.id} {...item} />)}
        </main>
      </div>
    )
  }
}

export default App
