const Quiz = require("../models/quiz-model");
const Question = require("../models/question-model");
const AnswerService = require("../services/answer-service");

const createQuestion = async (quizId, question) => {
  try {
    const newQuestion = await new Question({ quizId, text: question.text });
    await newQuestion.save();

    await Quiz.findByIdAndUpdate(
      quizId,
      { $push: { questions: newQuestion._id } },
      { new: true, upsert: true }
    );

    await question.answers.forEach(async (answer) => {
      await AnswerService.createAnswer(newQuestion._id, answer);
    });

    const populatedQuestion = getQuestion(newQuestion._id);

    return populatedQuestion;
  } catch (err) {
    throw err;
  }
};

const updateQuestion = async (question) => {
  try {
    // const { _id, text, answers } = question;
    // await Question.findByIdAndUpdate(_id, { text });
    // await answers.forEach(async (answer) => {
    //   if (answer._id) {
    //     await AnswerService.updateAnswer(answer);
    //   } else {
    //     await AnswerService.createAnswer(_id, question);
    //   }
    // });
  } catch (err) {
    throw err;
  }
};

const getQuestion = async (id) => {
  try {
    const populatedQuestion = Question.findById(id).populate("answers").exec();
    return populatedQuestion;
  } catch (err) {
    throw err;
  }
};

const deleteQuestion = async (id) => {
  try {
    await Question.findByIdAndRemove(id);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
