// @flow
import React, { Component } from 'react'
import logo from '../../logo.svg'

export class NavigationBar extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Github Feed</h2>
      </div>
    )
  }
}
