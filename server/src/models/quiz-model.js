const { Schema, model } = require("mongoose");

const Quiz = new Schema(
  {
    name: { type: String, required: true },
    questions: { type: Array, required: true },
    numberOfQuestions: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = model("quizzes", Quiz);

// id: ID;
// name: string;
// questions: IQuestion[];
// numberOfQuestions?: number;
