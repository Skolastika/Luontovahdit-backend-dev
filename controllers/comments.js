const commentsRouter = require('express').Router()
const Comment = require('../models/comment')
const Hotspot = require('../models/hotspot')
const User = require('../models/user')


commentsRouter.get('/', async (request, response) => {
  try {
    const comments = await Comment.find({})
    response.json(comments) // format...
  } catch (exception) {
    console.log(exception)
    response.status(500).json({ error: 'Failed to retrieve comments.' })
  }
})

commentsRouter.get('/user=:userId', async (request, response) => {
  try {
    const comments = await Comment.find({ addedBy: request.params.userId })
    response.json(comments) // format...
  } catch (exception) {
    console.log(exception)
    if (exception.kind === 'ObjectId') {
      return response.status(400).json({ error: exception.message })
    }
    response.status(500).json({ error: 'Failed to retrieve comments.' })
  }
})

commentsRouter.post('/', async (request, response) => {
  try {
    const body = request.body

    if (!body.userId) {
      return response.status(400).json({ error: 'No user specified.' })
    }

    // TODO: decode user token and find user by id from token
    //       and set addedBy according to found user (or return error)
    //       replace body.userId with token in header
    const user = await User.findById(body.userId)
    const hotspot = await Hotspot.findById(body.inHotspot)

    if (!user) {
      return response.status(404).json({ error: 'User not found.' })
    }

    const commentObject = {
      ...body,
      addedBy: user._id
    }
    delete commentObject.userId

    const comment = new Comment(commentObject)
    const savedComment = await comment.save()

    hotspot.comments = hotspot.comments.concat(savedComment._id)
    await hotspot.save()

    response.status(201).json(savedComment) // format...

  } catch (exception) {
    console.log(exception)
    if (exception.name === 'ValidationError') {
      console.log(exception._message)
      const paths = Object.keys(exception.errors)
      console.log(paths)
      response.status(400).json({ error: `Validation error: problem with ${paths.join(', ')}.` })
    } else if (exception.kind === 'ObjectId') {
      return response.status(400).json({ error: exception.message })
    } else {
      response.status(500).json({ error: 'Failed to create comment.' })
    }
  }
})

commentsRouter.delete('/:id', async (request, response) => {
  try {
    const comment = await Comment.findById(request.params.id)

    // if comment wasn't found, it's probably deleted already
    if (!comment) {
      return response.status(204).end()
    }

    const hotspot = await Hotspot.findById(comment.inHotspot)
    await comment.remove()

    if (!hotspot) {
      return response.status(410).json({ error: `The hotspot this comment is related to wasn't found on the server.` })
    }

    hotspot.comments = hotspot.comments.filter(c => c.toString() !== request.params.id.toString())
    await hotspot.save()
    response.status(204).end()

  } catch (exception) {
    console.log(exception)
    if (exception.kind === 'ObjectId') {
      return response.status(400).json({ error: 'Malformed id.' })
    }
    response.status(500).json({ error: 'Something went wrong while deleting comment.' })
  }
})

commentsRouter.patch('/:id', async (request, response) => {
  try {
    const comment = await Comment.findById(request.params.id)
    const body = request.body
    if (comment) {
      if (body._id) {
        delete body._id
      }
      console.log(body)
      for (let a in body) {
        comment[a] = body[a]
      }
      console.log(comment)
      comment.save((error, updatedComment) => {
        if (error) {
          const paths = Object.keys(error.errors)
          return response.status(400).json({ error: `Comment validation error: problem with ${paths.join(', ')}.` })
        }
        return response.status(200).json(updatedComment)
      })
    }
  } catch (exception) {
    console.log(exception)
    response.status(500).json({ error: 'Failed to update comment' })
  }
})

module.exports = commentsRouter