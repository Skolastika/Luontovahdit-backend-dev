const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
  try {
    const users = await User.find({})

    response.status(200).json(users) // format...
  } catch (exception) {
    console.log(exception)
    response.status(500).json({ error: 'Failed to retrieve users.' })
  }
})

usersRouter.get('/:id', async (request, response) => {
  try {
    const user = await User.findById(request.params.id)

    response.status(200).json(user) // format...
  } catch (exception) {
    console.log(exception)
    response.status(500).json({ error: 'Failed to find user.' })
  }
})

usersRouter.post('/', async (request, response) => {
  try {
    const body = request.body
    const user = new User(body)
    const savedUser = await user.save()
    response.status(201).json(savedUser)
  } catch (exception) {
    console.log(exception)
    if (exception.name === 'ValidationError') {
      console.log(exception._message)
      const paths = Object.keys(exception.errors)
      console.log(paths)
      response.status(400).json({ error: `Validation error: problem with ${paths.join(', ')}.` })
    } else {
      response.status(500).json({ error: 'Failed to create user.' })
    }
  }
})

module.exports = usersRouter