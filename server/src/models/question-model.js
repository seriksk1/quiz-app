const { Schema, model } = require("mongoose");
const Answer = require("./answer-model");

const Question = new Schema(
  {
    quizId: { type: Schema.Types.ObjectId, ref: "Quiz" },
    answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
    text: { type: String, default: "New question" },
    isAnswered: { type: Boolean, default: false },
  },
  { timestamps: true }
);

Question.pre("remove", { document: true, query: false }, async function (next) {
  let id = this._id;
  console.log("deleting answers of question:", id);
  await Answer.deleteMany({ questionId: id }, next);
});

module.exports = model("Question", Question);
