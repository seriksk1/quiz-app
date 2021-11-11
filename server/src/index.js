const express = require("express");
const cors = require("cors");
const path = require("path");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
require("./db");

const quizRouter = require("./routes/quiz-router");
const questionRouter = require("./routes/question-router");
const answerRouter = require("./routes/answer-router");
const authRouter = require("./routes/user-router");

const { verifyToken } = require("./middleware/jwt-verify");
const { handleError } = require("./middleware/error");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join("public")));
app.use("/uploads", express.static("uploads"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/api", [verifyToken]);
app.use("/api", [quizRouter, questionRouter, answerRouter]);
app.use("/auth", authRouter);

app.use((err, req, res, next) => {
  handleError(err, res);
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
