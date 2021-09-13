var express = require("express");
var dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
var app = express();
var port = process.env.PORT;
app.get("/", function (req, res) {
    res.send("Hello world!");
});
app.listen(port, function () { return console.log("Runnin1g on port " + port); });
//# sourceMappingURL=index.js.map