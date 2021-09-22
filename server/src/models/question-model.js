const { Schema, model } = require("mongoose");

const Question = new Schema(
  {
    quizId: { type: Schema.Types.ObjectId, ref: "Quiz" },
    answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],

    text: { type: String, default: "New question" },
    rightAnswerId: { type: Number, default: null },
    isAnswered: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = model("Question", Question);
