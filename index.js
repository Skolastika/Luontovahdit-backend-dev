const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
//const middleware = require('./utils/middleware')
const config = require('./utils/config')
const hotspotsRouter = require('./controllers/hotspots')
//const commentsRouter = require('./controllers/comments')

if ( process.env.NODE_ENV !== 'production' ) {
  require('dotenv').config()
}

mongoose
  .connect(config.mongoUrl)
  .then(() => {
    console.log('connected to database', config.mongoUrl)
  })
  .catch( err => {
    console.log(err)
  })

app.use(cors())
app.use(bodyParser.json())
app.use('/api/hotspots', hotspotsRouter)
//app.use('/api/comments', commentsRouter)

const server = http.createServer(app)

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

server.on('close', () => {
  mongoose.connection.close()
})

module.exports = {
  app, server
}