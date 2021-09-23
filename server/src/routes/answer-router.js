const express = require("express");
const AnswerCtrl = require("../controllers/answer-ctrl");

const router = express.Router();

router.post("/answer", AnswerCtrl.createAnswer);
router.patch("/answer/:id", AnswerCtrl.updateAnswer);
router.delete("/answer/:id", AnswerCtrl.deleteAnswer);

module.exports = router;
