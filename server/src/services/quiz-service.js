const Quiz = require("../models/quiz-model");
const QuestionService = require("../services/question-service");

const createQuiz = async (body) => {
  try {
    const { name, owner, questions, image } = body;

    const newQuiz = await new Quiz({ name, owner, image });
    await newQuiz.save();

    await questions.forEach(async (question) => {
      await QuestionService.createQuestion(newQuiz._id, question);
    });

    const populatedQuiz = await Quiz.findOne({ _id: newQuiz._id }).populate({
      path: "questions",
      populate: { path: "answers" },
    });

    return populatedQuiz;
  } catch (err) {
    throw err;
  }
};

const updateQuiz = async (body) => {
  try {
  } catch (err) {
    throw err;
  }
};

const deleteQuiz = async (id) => {
  try {
    const quiz = await Quiz.findById(id).populate({
      path: "questions",
      populate: { path: "answers" },
    });

    console.log(`Quiz ${id} is deleted`);
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

const getQuizByOwner = async (owner) => {
  try {
    const items = await Quiz.find({ owner }).populate({
      path: "questions",
      populate: { path: "answers" },
    });

    return items;
  } catch (err) {
    throw err;
  }
};

const updateQuizImage = async (id, image) => {
  try {
    await Quiz.findByIdAndUpdate(id, { image });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createQuiz,
  updateQuiz,
  deleteQuiz,
  getQuizzes,
  getQuizByOwner,
  updateQuizImage,
};
