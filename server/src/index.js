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

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/api", quizRouter);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
