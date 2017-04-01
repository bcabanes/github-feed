// @flow
import React, { Component, PropTypes } from 'react'

// Styles
import './news-item.css'

const getDomainFromUrl = (url: string): string => {
  const regex = /:\/\/(.[^/]+)/
  const domain = url.match(regex)
  return domain ? domain[1] : ''
}

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
        <a className='news--item__link' href={link} target='_blank'>
          {title} {' '}
          <span className='news-item__metas'>({getDomainFromUrl(link)})</span>
        </a>
        <br />
        <span className='news-item__metas'>
          on {dateView.getDate()}/{dateView.getMonth()}/{dateView.getFullYear()}
          {' | '}
          by {author}
        </span>
      </div>
    )
  }
}
