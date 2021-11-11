const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth-ctrl");
const UserController = require("../controllers/user-ctrl");

router.post("/register", UserController.createUser);
router.post("/login", AuthController.getUserToken);

module.exports = router;
