const mongoose = require('mongoose')
mongoose.plugin(require("mongoose-ajv-plugin"))

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },
    /*pictureUrl: {
      type: String,
      'ajv-schema': {
        type: 'string',
        format: 'url'
      }
    },*/
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    inHotspot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hotspot',
      required: true
    },
    upVotes: {
      type: Number,
      default: 0
    },
    downVotes: {
      type: Number,
      default: 0
    },
    flagged: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment