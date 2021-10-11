const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
require("./db");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

const quizRouter = require("./routes/quiz-router");
const questionRouter = require("./routes/question-router");
const answerRouter = require("./routes/answer-router");
const authRouter = require("./routes/user-router");

const { verifyToken } = require("./middleware/jwt-verify");
const { handleError } = require("./middleware/error");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/api", [verifyToken]);
app.use("/auth", authRouter);
app.use("/api", [quizRouter, questionRouter, answerRouter]);

app.use((err, req, res, next) => {
  handleError(err, res);
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
