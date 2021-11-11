const multer = require("multer");
const fs = require("fs");
// const { createFoldersByPath } = require("../helpers/fileSystem");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let dir = "public";

    return cb(null, dir);
  },
  filename: (req, file, cb) => {
    let path = "";
    let prefix = "";

    if (Object.keys(req.body) && req.body.data) {
      body = JSON.parse(req.body.data);
      path = `uploads/${body.owner}/quizzes/`;
    } else if (req.body.username) {
      path = `uploads/${req.body.username}/`;
    } else {
      path = `uploads/trash`;
    }

    if (!fs.existsSync(`public/${path}`)) {
      fs.mkdirSync(`public/${path}`, { recursive: true });
    }

    if (file.fieldname === "avatar") {
      prefix = "user";
    } else if (file.fieldname === "image") {
      prefix = "quiz";
    }

    const ext = file.mimetype.split("/")[1];
    path = `${path}${prefix}-${Date.now()}.${ext}`;
    cb(null, path);
  },
});

const multerFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Not an image!"), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

module.exports = upload;
