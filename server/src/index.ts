const express = require("express");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const app = express();
const port = process.env.PORT;

app.get("/", (req: any, res: any) => {
  res.send("Hello world!");
});

app.listen(port, () => console.log(`Runnin1g on port ${port}`));
