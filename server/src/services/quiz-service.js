const Quiz = require("../models/quiz-model");
const QuestionService = require("../services/question-service");

const createQuiz = async (body) => {
  try {
    const { name, owner, questions } = body;

    console.log("body:", body);

    const newQuiz = await new Quiz({ name, owner });
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
    // const { _id, name, owner, questions } = body;
    // await Quiz.findByIdAndUpdate(_id, { name, owner });
    // await questions.forEach(async (question) => {
    //   if (question._id) {
    //     await QuestionService.updateQuestion(question);
    //   } else {
    //     await QuestionService.createQuestion(_id, question);
    //   }
    // });
    // const updatedQuiz = await Quiz.findById(_id);
    // return updatedQuiz;
  } catch (err) {
    throw err;
  }
};

const deleteQuiz = async (id) => {
  try {
    await Quiz.findByIdAndDelete(id);
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
