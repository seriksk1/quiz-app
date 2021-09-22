const { Schema, model } = require("mongoose");

const Answer = new Schema(
  {
    questionId: { type: Schema.Types.ObjectId, ref: "Question" },
    text: { type: String, default: "New answer" },
  },
  { timestamps: true }
);

module.exports = model("Answer", Answer);
