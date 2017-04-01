// @flow
import Fetch from 'isomorphic-fetch'

export const getFeed = () => {
  return Fetch('./data.json')
    .then((response) => {
      if (response.status >= 400) throw new Error('Bad response from server')
      return response.json()
    })
}
