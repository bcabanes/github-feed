// @flow
import React, { Component, PropTypes } from 'react'

export class Item extends Component {
  static propTypes = {
    author: PropTypes.string,
    categories: PropTypes.array,
    date: PropTypes.string,
    image: PropTypes.object,
    link: PropTypes.string,
    title: PropTypes.string
  }
  render() {
    const { author, date, link, title } = this.props
    const dateView = new Date(date)
    return (
      <div className='item' onClick={() => window.location = link}>
        <h4>{title}</h4>
        <p>on {dateView.getDate()}/{dateView.getMonth()}/{dateView.getFullYear()} | by {author}</p>
      </div>
    )
  }
}
