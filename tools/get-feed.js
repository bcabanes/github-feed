const request = require('request')
const path = require('path')
const FeedParser = require('feedparser')
const jsonfile = require('jsonfile')

const req = request('http://www.universetoday.com/universetoday.xml')
const feedparser = new FeedParser()
const filePath = path.resolve(__dirname+'/../public/data.json')

req.on('erro', (error) => console.log(error))
req.on('response', function(res) {
  const stream = this
  if (res.statusCode !== 200) {
    return this.emit('error', new Error('bad Status code'))
  }
  return stream.pipe(feedparser)
})
const feed = []
feedparser.on('error', (error) => console.log(error))
feedparser.on('readable', function() {
  const stream = this
  let item
  while (item = stream.read()) {
    // console.log(item)
    feed.push({
      author: item.author,
      categories: item.categories,
      date: item.date,
      image: item.image,
      link: item.link,
      title: item.title
    })
  }

  return jsonfile.writeFile(filePath, feed, { spaces: 2 },
    (error) => { if (error) { console.log(error) }})
})
