// @flow
import React, { PropTypes } from 'react'

import './news-link.css'

const getDomainFromUrl = (url: string): string => {
  const regex = /:\/\/(.[^/]+)/
  const domain = url.match(regex)
  return domain ? domain[1] : ''
}

export const NewsLink = (props: { children: any, target: string }) => {
  const { target } = props
  return (
    <a className='news-link' href={target} target='_blank'>
      {props.children} {' '}
      <small className='news-link--url'>({getDomainFromUrl(target)})</small>
    </a>
  )
}

NewsLink.propTypes = {
  target: PropTypes.string.isRequired
}
