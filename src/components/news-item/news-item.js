// @flow
import React, { Component, PropTypes } from 'react'

// Styles
import './news-item.css'

// Components
import { NewsLink } from '../news-link'

export class NewsItem extends Component {
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
      <div className='news-item'>
        <span className='news-item--title'>
          <NewsLink target={link}>{title}</NewsLink>
        </span>
        <br />
        <span className='news-item--metas'>
          on {dateView.getDate()}/{dateView.getMonth()}/{dateView.getFullYear()}
          {' | '}
          by {author}
        </span>
      </div>
    )
  }
}
