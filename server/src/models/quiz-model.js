const { Schema, model } = require("mongoose");
const Question = require("./question-model");

const Quiz = new Schema(
  {
    name: { type: String, default: "New quiz" },
    owner: { type: String, required: true },
    questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
    image: { type: String },
  },
  { timestamps: true }
);

Quiz.pre("deleteOne", { document: true, query: true }, async function (next) {
  let id = this.getQuery()["_id"];
  let questions = await Question.find({ quizId: id });

  questions.forEach(async (question) => {
    await question.deleteOne({ _id: question._id }, next);
  });
});

module.exports = model("Quiz", Quiz);
