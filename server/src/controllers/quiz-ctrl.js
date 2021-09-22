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

const getQuizById = async () => {
  try {
    console.log("call quiz-service getById");
    await QuizService.getQuizById();
  } catch (err) {
    console.log(err);
  }
};

const createQuiz = async (req, res) => {
  try {
    console.log("call quiz-service create quiz");
    const newQuiz = await QuizService.createQuiz();

    res.status(200).json({ success: true, data: newQuiz });
  } catch (err) {
    console.log(err);
  }
};

const createQuestion = async (req, res, next) => {
  try {
    const { quizId } = req.body;
    console.log("call quiz-service create question");
    const newQuestion = await QuizService.createQuestion(quizId);

    res.status(200).json({ success: true, data: newQuestion });
  } catch (err) {
    console.log(err);
  }
};

const createAnswer = async (req, res, next) => {
  try {
    const { questionId } = req.body;
    console.log("questionId:", questionId);
    console.log("call quiz-service create answer");
    const newAnswer = await QuizService.createAnswer(questionId);

    res.status(200).json({ success: true, data: newAnswer });
  } catch (err) {
    console.log(err);
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
