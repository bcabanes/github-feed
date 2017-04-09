// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { hydrateNewsFeed } from './actions'

// Components
import { NewsItem } from '../../components/news-item'

class NewsFeed extends Component {
  props: {
    hydrateNewsFeed: () => any[],
    newsFeed: { itemList: any[], filter: string },
    router: any
  }

  componentDidMount() {
    this.props.hydrateNewsFeed()
  }

  render() {
    const { newsFeed } = this.props
    return (
      <div>
        {newsFeed.itemList.map((news) => <NewsItem key={news.id} {...news} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  newsFeed: state.newsFeed,
  router: state.router
})
const mapDispatchToProps = (dispatch) => {
  return { hydrateNewsFeed: () => dispatch(hydrateNewsFeed()) }
}

export const NewsFeedContainer = connect(mapStateToProps, mapDispatchToProps)(NewsFeed)
