const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const dotenv = require('dotenv')

dotenv.load()

const app = express()
let port = process.env.PORT || 4242
let env = process.env.NODE_ENV || 'development'
let publicPath = path.join(__dirname, 'public')
let bowerPath = path.join(__dirname, 'bower_components')

if (env === 'development') {
  const webpackBundler = require('./lib/middleware/webpack-bundler-middleware')
  app.use(webpackBundler())
  app.use(logger('dev'))
}

app.use(bodyParser.json())
app.use(cors())
app.use(express.static(publicPath))
app.use("/pack", express.static(bowerPath))

app.get('*', (req, res) => {
  return res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => {
  console.log(`NODE_ENV ${env} on ${port}`)
})
