const Quiz = require("../models/quiz-model");
const Question = require("../models/question-model");
const Answer = require("../models/answer-model");

const updateQuiz = async () => {
  try {
    const updatedQuiz = await Quiz.findOneAndUpdate({});
    console.log("update quiz-service");
  } catch (err) {
    throw err;
  }
};

const deleteQuiz = async () => {
  try {
    console.log("delete quiz-service");
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

    console.log("get all quiz-service");
    return items;
  } catch (err) {
    throw err;
  }
};

const getQuizById = async () => {
  try {
    console.log("get by id quiz-service");
  } catch (err) {
    throw err;
  }
};

const createQuiz = async () => {
  try {
    const newQuiz = await new Quiz();
    await newQuiz.save();
    await createQuestion(newQuiz._id);

    const populatedQuiz = await Quiz.findOne({ _id: newQuiz._id }).populate({
      path: "questions",
      populate: { path: "answers" },
    });

    return populatedQuiz;
  } catch (err) {
    throw err;
  }
};

const createQuestion = async (quizId) => {
  try {
    const newQuestion = await new Question({ quizId });
    await newQuestion.save();

    await Quiz.findByIdAndUpdate(
      quizId,
      { $push: { questions: newQuestion._id } },
      { new: true, upsert: true }
    );

    await createAnswer(newQuestion._id);

    const populatedQuestion = Question.findById(newQuestion._id)
      .populate("answers")
      .exec();

    return populatedQuestion;
  } catch (err) {
    throw err;
  }
};

const createAnswer = async (questionId) => {
  try {
    const newAnswer = await new Answer({ questionId });
    await newAnswer.save();

    await Question.findByIdAndUpdate(
      questionId,
      { $push: { answers: newAnswer._id } },
      { new: true, upsert: true }
    );

    console.log("newAnswer:", newAnswer);
    return newAnswer;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  updateQuiz,
  deleteQuiz,
  getQuizzes,
  getQuizById,
  createQuiz,
  createQuestion,
  createAnswer,
};
