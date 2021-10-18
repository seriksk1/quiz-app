const QuizService = require("../services/quiz-service");
const { HTTP_STATUS } = require("../constants");

const createQuiz = async (req, res) => {
  try {
    const body = req.body;
    const newQuiz = await QuizService.createQuiz(body);

    res.status(HTTP_STATUS.OK).json({ success: true, data: newQuiz });
  } catch (err) {
    console.log(err);
  }
};

const updateQuiz = async (req, res) => {
  try {
    // const body = req.body;
    // const updatedQuiz = await QuizService.updateQuiz(body);
    // console.log("updatedQuiz:", updatedQuiz);
    // res.status(HTTP_STATUS.OK).json({ success: true, data: updatedQuiz });
  } catch (err) {
    console.log(err);
  }
};

const deleteQuiz = async (req, res) => {
  try {
    const id = req.params.id;
    await QuizService.deleteQuiz(id);
    res.status(HTTP_STATUS.OK).json({ success: true });
  } catch (err) {
    console.log(err);
  }
};

const getQuizzes = async (req, res) => {
  try {
    const items = await QuizService.getQuizzes();
    res.status(HTTP_STATUS.OK).json({ success: true, data: items });
  } catch (err) {
    console.log(err);
  }
};

const getQuizByOwner = async (req, res) => {
  try {
    const owner = req.params.owner;
    const items = await QuizService.getQuizByOwner(owner);

    res.status(HTTP_STATUS.OK).json({ success: true, data: items });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createQuiz,
  updateQuiz,
  deleteQuiz,
  getQuizzes,
  getQuizByOwner,
};
