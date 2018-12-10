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

// implement get for narrowing down comments to fetch
// e.g. comments related to a certain user

commentsRouter.post('/', async (request, response) => {
  try {
    const body = request.body
    // TODO: decode user token and find user by id from token
    //       and set addedBy according to found user (or return error)
    //       replace body.userId with token in header
    const user = await User.findById(body.userId)
    const hotspot = await Hotspot.findById(body.inHotspot)

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
    response.status(500).json({ error: 'Failed to create comment.' })
  }
})

module.exports = commentsRouter