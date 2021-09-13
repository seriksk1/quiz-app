const express = require("express");
const QuizCtrl = require("../controllers/quiz-ctrl");

const router = express.Router();

router.post("/quiz", QuizCtrl.createQuiz);
router.patch("/quiz/:id", QuizCtrl.updateQuiz);
router.delete("/quiz/:id", QuizCtrl.deleteQuiz);
router.get("/quizes", QuizCtrl.getQuizes);

module.exports = router;

export {};
