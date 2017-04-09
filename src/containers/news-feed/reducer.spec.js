import { newsFeedReducer as reducer } from './reducer'
import * as types from './action-types'

const initialStateStub = {
  itemList: [],
  filter: null
}

describe('NewsFeed reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialStateStub)
  })

  it('should set the item list', () => {
    const itemList = [
      { id: 1, name: 'item 1' },
      { id: 2, name: 'item 2' }
    ]
    expect(reducer(undefined, {
      type: types.SET_NEWSFEED_ITEM_LIST,
      payload: itemList
    })).toEqual({
      ...initialStateStub,
      itemList
    })
  })

  it('should add an item in item list', () => {
    const item = { id: 1, name: 'item 1' }
    expect(reducer(initialStateStub, {
      type: types.ADD_NEWSFEED_ITEM,
      payload: item
    })).toEqual({
      ...initialStateStub,
      itemList: [ item ]
    })
  })
})
