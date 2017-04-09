// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Styles
import './navigation-bar.css'

export class NavigationBar extends Component {
  render() {
    return (
      <div className='navigation-bar'>
        <div className='wrapper'>
          <h2 className='navigation-bar__title'>Now In Space</h2>
          <p>
            <Link to="/">Feed</Link> {' | '}
            <Link to="/live-streams">ISS live</Link>
          </p>
        </div>
      </div>
    )
  }
}
