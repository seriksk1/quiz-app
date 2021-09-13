const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// id: ID;
// name: string;
// questions: IQuestion[];
// numberOfQuestions?: number;

const Quiz = new Schema(
  {
    name: { type: String, required: true },
    questions: { type: Array, required: true },
    numberOfQuestions: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("quizes", Quiz);
