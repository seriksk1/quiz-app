"use strict";
exports.__esModule = true;
var express = require("express");
var QuizCtrl = require("../controllers/quiz-ctrl");
var router = express.Router();
router.post("/quiz", QuizCtrl.createQuiz);
router.patch("/quiz/:id", QuizCtrl.updateQuiz);
router["delete"]("/quiz/:id", QuizCtrl.deleteQuiz);
router.get("/quizes", QuizCtrl.getQuizes);
module.exports = router;
//# sourceMappingURL=quiz-router.js.map