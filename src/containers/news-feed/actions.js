import * as types from './action-types'
import { getFeed } from '../../utils'

export const addNewsFeedItem = (payload) =>
  ({ type: types.ADD_NEWSFEED_ITEM, payload})
export const setNewsFeedItemList = (payload) =>
  ({ type: types.SET_NEWSFEED_ITEM_LIST, payload})
export const hydrateNewsFeed = () => async (dispatch) => {
  try {
    dispatch(setNewsFeedItemList(await getFeed()))
  } catch (e) {
    console.error('hydrateNewsFeed', e)
  }
}
