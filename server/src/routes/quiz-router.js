const express = require("express");
const QuizCtrl = require("../controllers/quiz-ctrl");

const router = express.Router();

router.post("/quiz", QuizCtrl.createQuiz);
router.put("/quiz", QuizCtrl.updateQuiz);
router.delete("/quiz/:id", QuizCtrl.deleteQuiz);
router.get("/quizzes", QuizCtrl.getQuizzes);

router.get("/quizzes/:owner", QuizCtrl.getQuizByOwner);

module.exports = router;
