import * as types from './action-types'

const initialState = {
  itemList: [],
  filter: null
}

export const newsFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NEWSFEED_ITEM:
      return {
        ...state,
        itemList: [ ...state.itemList, action.payload ]
      }
    case types.SET_NEWSFEED_ITEM_LIST:
      return {
        ...state,
        itemList: action.payload
      }
    default:
      return state
  }
}
