const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    email: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    avatar: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);
