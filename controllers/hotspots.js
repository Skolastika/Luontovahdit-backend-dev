const hotspotsRouter = require('express').Router()
const Hotspot = require('../models/hotspot')
const validation = require('../utils/validation')

const MAX_RADIUS = 500 // maximum/default distance in km for searching nearby hotspots
const MAX_HOTSPOTS = 100 // maximum number of hotspots returned for query

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

// GET nearby hotspots (requires 2dsphere index in collection)
// parameters after @: longitude, latitude, radius (in kilometers), comma separated
// returns hotspots sorted by distance limited to MAX_HOTSPOTS
hotspotsRouter.get('/@:longitude,:latitude,:radius', async (request, response) => {
  const coordinates = [request.params.longitude, request.params.latitude]
  let radius = Number.parseFloat(request.params.radius)
  try {
    if (validation.validateCoordinates(coordinates)) {
      console.log('radius: ', radius)
      if (!radius || radius > MAX_RADIUS) {
        radius = MAX_RADIUS
      }
      console.log('radius: ', radius)
      const hotspots = await Hotspot
        .find({
          location: {
            $nearSphere: {
              $geometry: {
                type: 'Point',
                coordinates: coordinates
              },
              $maxDistance: radius * 1000 // convert to meters
            }
          }
        })
        .limit(MAX_HOTSPOTS)
      response.status(200).json(hotspots)
    }
    else {
      return response.status(400).json({ error: 'Something wrong with coordinates.' })
    }
  } catch (exception) {
    console.log(exception)
    response.status(500).json({ error: exception._message })
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
          console.log(error)
          const paths = Object.keys(error.errors)
          return response.status(400).json({ error: `Hotspot validation error: problem with ${paths.join(', ')}.` })
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