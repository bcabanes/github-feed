// @flow
import React from 'react'
import { NewsItem } from '../news-item'

export const NewsList = (itemList: any[]) => () => {
  return (
    <div>
      {itemList.map((item) => <NewsItem key={item.id} {...item} />)}
    </div>
  )
}
