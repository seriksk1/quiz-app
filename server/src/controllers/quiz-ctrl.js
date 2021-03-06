const QuizService = require("../services/quiz-service");
const UserService = require("../services/user-service");
const { HTTP_STATUS } = require("../constants");
const { deleteFile } = require("../helpers/fileSystem");

const createQuiz = async (req, res) => {
  try {
    let body = { ...JSON.parse(req.body.data) };

    if (req.file) {
      body = { ...body, image: req.file.filename };
    }

    const newQuiz = await QuizService.createQuiz(body);

    res.status(HTTP_STATUS.OK).json({ success: true, data: newQuiz });
  } catch (err) {
    console.log(err);
  }
};

const updateQuiz = async (req, res) => {
  try {
    let body = { ...JSON.parse(req.body.data) };
    let haveImage = false;

    if (req.file) {
      body = { ...body, image: req.file.filename };
      haveImage = Boolean(req.file);
    }
    // const newQuiz = await QuizService.updateQuiz(body);

    await QuizService.deleteQuiz(body._id, haveImage);

    const newQuiz = await QuizService.createQuiz(body);

    res.status(HTTP_STATUS.OK).json({ success: true, data: newQuiz });
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
    const user = await UserService.getUser(owner);

    res.status(HTTP_STATUS.OK).json({ success: true, data: items, user: user });
  } catch (err) {
    console.log(err);
  }
};

const updateQuizImage = async (req, res) => {
  try {
    const quizId = req.params.quizId;
    const image = req.body.image;

    await QuizService.updateQuizImage(quizId, image);
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
  updateQuizImage,
};
