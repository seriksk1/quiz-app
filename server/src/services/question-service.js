const Quiz = require("../models/quiz-model");
const Question = require("../models/question-model");
const AnswerService = require("../services/answer-service");

const createQuestion = async (quizId) => {
  try {
    const newQuestion = await new Question({ quizId });
    await newQuestion.save();

    await Quiz.findByIdAndUpdate(
      quizId,
      { $push: { questions: newQuestion._id } },
      { new: true, upsert: true }
    );

    await AnswerService.createAnswer(newQuestion._id);

    const populatedQuestion = getQuestion(newQuestion._id);

    return populatedQuestion;
  } catch (err) {
    throw err;
  }
};

const updateQuestion = async (questionId) => {
  try {
    const updatedQuestion = Question.findByIdAndUpdate(
      { _id: questionId },
      { $push: { answers: newAnswerId } },
      { new: true, upsert: true }
    );
    return updatedQuestion;
  } catch (err) {
    throw err;
  }
};

const getQuestion = async (id) => {
  try {
    const populatedQuestion = Question.findById(id).populate("answers").exec();
    return populatedQuestion;
  } catch (err) {
    throw err;
  }
};

const deleteQuestion = async (id) => {
  try {
    await Question.findByIdAndRemove(id);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
