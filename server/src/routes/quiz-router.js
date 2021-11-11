const express = require("express");
const QuizCtrl = require("../controllers/quiz-ctrl");

const upload = require("../middleware/upload");
const router = express.Router();

router.post("/quiz", upload.single("image"), QuizCtrl.createQuiz);
router.put("/quiz", upload.single("image"), QuizCtrl.updateQuiz);
router.delete("/quiz/:id", QuizCtrl.deleteQuiz);
router.get("/quizzes", QuizCtrl.getQuizzes);

router.get("/quizzes/:owner", QuizCtrl.getQuizByOwner);

module.exports = router;
