const hotspotsRouter = require('express').Router()
const Hotspot = require('../models/hotspot')

hotspotsRouter.get('/', async (request, response) => {
  try{
    const hotspots = await Hotspot
      .find({}) // populate?
    response.json(hotspots) // format!
  } catch (exception) {
    console.log(exception)
    response.status(500).json({ error: 'Failed to retrieve hotspots.' })
  }
})

hotspotsRouter.post('/', async (request, response) => {
  try {
    // user token needs to be sent, extracted, and verified
    const body = request.body
    const hotspot = new Hotspot(body)
    const savedHotspot = await hotspot.save()
    // populate comments?
    // savedHotspot.populate('comments', {})
    response.status(201).json(savedHotspot)
  } catch (exception) {
    console.log(exception)
    if (exception.name === 'ValidationError') {
      console.log(exception._message)
      const paths = Object.keys(exception.errors)
      console.log(paths)
      response.status(400).json({ error: `Validation error: problem with ${paths.join(', ')}.` })
    } else {
      response.status(500).json({ error: 'Failed to create hotspot.' })
    }
  }
})


module.exports = hotspotsRouter