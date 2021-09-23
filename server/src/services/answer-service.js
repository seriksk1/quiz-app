const Answer = require("../models/answer-model");
const Question = require("../models/question-model");

const createAnswer = async (questionId) => {
  try {
    const newAnswer = await new Answer({ questionId });
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

const updateAnswer = async (answerId, isRight) => {
  try {
    const updatedAnswer = Answer.findByIdAndUpdate(
      { _id: answerId },
      { isRight: isRight },
      { new: true, upsert: true }
    );
    return updatedAnswer;
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
