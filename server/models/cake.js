const mongoose = require('mongoose');

const Cake = mongoose.model('Cake', {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  comment: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  imageUrl: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  yumFactor: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  }
});

module.exports = {Cake};