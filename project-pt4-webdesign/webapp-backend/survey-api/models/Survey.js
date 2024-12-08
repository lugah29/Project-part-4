const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
  creator: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  topicSpecificField: {
    type: String,
    required: true
  },
  feedback: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    enum: ['food', 'travel', 'technology'],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Survey', SurveySchema);
