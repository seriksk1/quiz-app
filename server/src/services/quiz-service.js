const Quiz = require("../models/quiz-model");

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
    const items = await Quiz.find({});

    console.log("get all quiz-service");
    return items;
  } catch (err) {
    throw err;
  }
};

const createQuiz = async (body) => {
  try {
    const newQuiz = await new Quiz(body);
    await newQuiz.save();

    console.log("create quiz-service");

    return newQuiz;
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

module.exports = {
  updateQuiz,
  deleteQuiz,
  getQuizzes,
  createQuiz,
  getQuizById,
};
