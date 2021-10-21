const { Schema, model } = require("mongoose");

const File = new Schema(
  {
    owner: { type: String, required: true },
    name: { type: String, required: true },
    isAvatar: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = model("File", File);
