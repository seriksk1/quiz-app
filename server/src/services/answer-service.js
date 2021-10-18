const Answer = require("../models/answer-model");
const Question = require("../models/question-model");

const createAnswer = async (questionId, answer) => {
  try {
    const newAnswer = await new Answer({ questionId, ...answer });
    await newAnswer.save();

    await Question.findByIdAndUpdate(
      questionId,
      { $push: { answers: newAnswer._id } },
      { new: true, upsert: true }
    );

    return newAnswer;
  } catch (err) {
    throw err;
  }
};

const updateAnswer = async (answer) => {
  try {
    // const { _id, text, isRight } = answer;
    // await Answer.findByIdAndUpdate(_id, { text, isRight });
  } catch (err) {
    throw err;
  }
};

const deleteAnswer = async (id) => {
  try {
    await Answer.findByIdAndRemove(id);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createAnswer,
  updateAnswer,
  deleteAnswer,
};
