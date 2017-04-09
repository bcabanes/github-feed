import { NewsFeedContainer } from './containers/news-feed'
import { LiveStreams } from './containers/live-streams'

export default [
  { path: '/', exact: true, component: NewsFeedContainer },
  { path: '/live-streams', component: LiveStreams }
]
