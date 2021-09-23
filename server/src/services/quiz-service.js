const Quiz = require("../models/quiz-model");
const QuestionService = require("../services/question-service");

const createQuiz = async () => {
  try {
    const newQuiz = await new Quiz();
    await newQuiz.save();
    await QuestionService.createQuestion(newQuiz._id);

    const populatedQuiz = await Quiz.findOne({ _id: newQuiz._id }).populate({
      path: "questions",
      populate: { path: "answers" },
    });

    return populatedQuiz;
  } catch (err) {
    throw err;
  }
};

const updateQuiz = async (quizId) => {
  try {
    const updatedQuiz = Quiz.findByIdAndUpdate(
      { _id: quizId },
      { $push: { questions: newQuestion._id } },
      { new: true, upsert: true }
    );
    return updatedQuiz;
  } catch (err) {
    throw err;
  }
};

const deleteQuiz = async (id) => {
  try {
    await Quiz.findByIdAndRemove(id);
  } catch (err) {
    throw err;
  }
};

const getQuizzes = async () => {
  try {
    const items = await Quiz.find({}).populate({
      path: "questions",
      populate: { path: "answers" },
    });

    return items;
  } catch (err) {
    throw err;
  }
};

const getQuizById = async () => {
  try {
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createQuiz,
  updateQuiz,
  deleteQuiz,
  getQuizzes,
  getQuizById,
};
