const { Schema, model } = require("mongoose");

const Quiz = new Schema(
  {
    name: { type: String, default: "New quiz" },
    questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  },
  { timestamps: true }
);

module.exports = model("Quiz", Quiz);
