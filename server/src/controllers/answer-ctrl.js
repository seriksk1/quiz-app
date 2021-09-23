const AnswerService = require("../services/answer-service");
const HTTP_STATUS = require("../constants");

const createAnswer = async (req, res) => {
  try {
    const { questionId } = req.body;
    const newAnswer = await AnswerService.createAnswer(questionId);

    res.status(HTTP_STATUS.OK).json({ success: true, data: newAnswer });
  } catch (err) {
    console.log(err);
  }
};

const updateAnswer = async () => {
  try {
    await AnswerService.updateAnswer();
  } catch (err) {
    console.log(err);
  }
};

const deleteAnswer = async (req, res) => {
  try {
    const id = req.params.id;
    await AnswerService.deleteAnswer(id);
    res.status(HTTP_STATUS.OK).json({ success: true });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createAnswer,
  updateAnswer,
  deleteAnswer,
};
