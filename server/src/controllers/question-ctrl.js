const QuestionService = require("../services/question-service");
const HTTP_STATUS = require("../constants");

const createQuestion = async (req, res) => {
  try {
    const { quizId } = req.body;
    const newQuestion = await QuestionService.createQuestion(quizId);

    res.status(HTTP_STATUS.OK).json({ success: true, data: newQuestion });
  } catch (err) {
    console.log(err);
  }
};

const updateQuestion = async () => {
  try {
    await QuestionService.updateQuestion();
  } catch (err) {
    console.log(err);
  }
};

const deleteQuestion = async (req, res) => {
  try {
    const id = req.params.id;
    await QuestionService.deleteQuestion(id);
    res.status(HTTP_STATUS.OK).json({ success: true });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
