const { Schema, model } = require("mongoose");

const Quiz = new Schema(
  {
    name: { type: String, default: "New quiz" },
    owner: { type: String, required: true },
    questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = model("Quiz", Quiz);
