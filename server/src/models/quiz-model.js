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
  console.log("Delete questions");
  await Question.find({ quizId: id }, next);
});

module.exports = model("Quiz", Quiz);
