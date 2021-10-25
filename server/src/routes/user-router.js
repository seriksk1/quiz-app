const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const AuthCtrl = require("../controllers/user-ctrl");

router.post("/register", AuthCtrl.createUser);
router.post("/login", AuthCtrl.getUserToken);
router.put(
  "/upload-avatar/:username",
  upload.single("file"),
  AuthCtrl.updateUserImage
);

module.exports = router;
