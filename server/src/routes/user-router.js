const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const UserController = require("../controllers/user-ctrl");

router.get("/users/:searchName", UserController.getUsersByName);
router.put(
  "/upload-avatar/:username",
  upload.single("avatar"),
  UserController.updateUserImage
);

module.exports = router;
