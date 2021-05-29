const path = require('path')
const ghpages = require('gh-pages')

ghpages.publish(path.join(__dirname, '../example/dist'), (err) => {
  if (err) {
    console.log(err)
  }
  else {
    console.log('publish to github page done')
  }
})
