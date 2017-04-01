// @flow
import React, { Component } from 'react'

// Styles
import './navigation-bar.css'

export class NavigationBar extends Component {
  render() {
    return (
      <div className='navigation-bar'>
        <div className='wrapper'>
          <h2 className='navigation-bar__title'>Now In Space</h2>
        </div>
      </div>
    )
  }
}
