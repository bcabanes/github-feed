// @flow
import React, { Component } from 'react'

// Utils
import { getFeed } from './utils'

// Styles
import 'normalize.css/normalize.css'
import './variables.css'
import './App.css'

// Components
import { ISSLiveStream } from './components/iss-live-stream'
import { NewsItem } from './components/news-item'
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
        <main className="App-wrapper">
          <ISSLiveStream />
          {itemList.map((item) => <NewsItem key={item.id} {...item} />)}
        </main>
      </div>
    )
  }
}

export default App
