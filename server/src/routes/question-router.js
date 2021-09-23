const express = require("express");
const QuestionCtrl = require("../controllers/question-ctrl");

const router = express.Router();

router.post("/question", QuestionCtrl.createQuestion);
router.patch("/question/:id", QuestionCtrl.updateQuestion);
router.delete("/question/:id", QuestionCtrl.deleteQuestion);

module.exports = router;
