const express = require("express");
const QuizCtrl = require("../controllers/quiz-ctrl");

const router = express.Router();

router.patch("/quiz/:id", QuizCtrl.updateQuiz);
router.delete("/quiz/:id", QuizCtrl.deleteQuiz);
router.get("/quizzes", QuizCtrl.getQuizzes);

router.post("/quiz", QuizCtrl.createQuiz);
router.post("/question", QuizCtrl.createQuestion);
router.post("/answer", QuizCtrl.createAnswer);

module.exports = router;
