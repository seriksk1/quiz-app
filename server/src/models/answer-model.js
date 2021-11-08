const { Schema, model } = require('mongoose');

const Answer = new Schema(
  {
    questionId: { type: Schema.Types.ObjectId, ref: 'Question' },
    text: { type: String, default: 'New answer' },
    isRight: { type: Boolean, default: false },
  },
  { timestamps: true },
);

module.exports = model('Answer', Answer);
