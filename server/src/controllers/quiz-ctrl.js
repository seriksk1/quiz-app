const QuizService = require("../services/quiz-service");

const updateQuiz = async () => {
  try {
    console.log("call quiz-service update");
    await QuizService.updateQuiz();
  } catch (err) {
    console.log(err);
  }
};

const deleteQuiz = async () => {
  try {
    console.log("call quiz-service delete");
    await QuizService.deleteQuiz();
  } catch (err) {
    console.log(err);
  }
};

const getQuizzes = async (req, res) => {
  try {
    console.log("call quiz-service get all");
    const items = await QuizService.getQuizzes();
    res.status(200).json({ success: true, data: items });
  } catch (err) {
    console.log(err);
  }
};

const createQuiz = async () => {
  try {
    console.log("call quiz-service create");
    await QuizService.createQuiz();
  } catch (err) {
    console.log(err);
  }
};

const getQuizById = async () => {
  try {
    console.log("call quiz-service getById");
    await QuizService.getQuizById();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  updateQuiz,
  deleteQuiz,
  getQuizzes,
  createQuiz,
  getQuizById,
};
