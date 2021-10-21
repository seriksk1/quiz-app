const express = require("express");
const router = express.Router();

const FileCtrl = require("../controllers/file-ctrl");
const upload = require("../middleware/upload");

router.post("/upload", upload.single("file"), FileCtrl.createFile);
router.delete("/file/:filename", FileCtrl.deleteFile);
router.get("/file/:filename", FileCtrl.getFile);

module.exports = router;
