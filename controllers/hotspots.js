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

// implement get for narrowing down hotspots to fetch

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

hotspotsRouter.delete('/:id', async (request, response) => {
  try {
    const hotspot = await Hotspot.findById(request.params.id)
    if (!hotspot) {
      return response.status(204).end()
    }
    // should check user token here
    await hotspot.remove()
    response.status(204).end()
  } catch (exception) {
    console.log(exception)
    if (exception.kind === 'ObjectId') {
      return response.status(400).json({ error: 'Malformed id.' })
    }
    response.status(500).json({ error: 'Failed to delete hotspot.' })
  }
})

hotspotsRouter.patch('/:id', async (request, response) => {
  try {
    const hotspot = await Hotspot.findById(request.params.id)
    const body = request.body
    if (hotspot) {
      if (body._id) {
        delete body._id
      }
      console.log(body)
      for (let a in body) {
        hotspot[a] = body[a]
      }
      hotspot.save((error, updatedHotspot) => {
        if (error) {
          const paths = Object.keys(error.errors)
          return response.status(400).json({ error: `Validation error: problem with ${paths.join(', ')}.` })
        }
        return response.status(200).json(updatedHotspot)
      })
    }
  } catch (exception) {
    console.log(exception)
    if (exception.kind === 'ObjectId') {
      return response.status(400).json({ error: 'Malformed id.' })
    }
    response.status(500).json({ error: 'Failed to update hotspot.' })
  }
})

module.exports = hotspotsRouter