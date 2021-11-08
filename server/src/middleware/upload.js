const multer = require("multer");
const fs = require("fs");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let body = {};
    let dir = "";

    if (Object.keys(req.body) && req.body.data) {
      body = JSON.parse(req.body.data);
      dir = `public/uploads/${body.owner}/quizzes`;
    } else if (req.body.username) {
      dir = `public/uploads/${req.body.username}`;
    } else {
      dir = `public/uploads/trash`;
    }

    fs.exists(dir, (exist) => {
      if (!exist) {
        fs.mkdirSync(dir, { recursive: true });
      }
      return cb(null, dir);
    });
  },
  filename: (req, file, cb) => {
    let prefix = "";

    if (file.fieldname === "avatar") {
      prefix = "user";
    } else if (file.fieldname === "image") {
      prefix = "quiz";
    }

    const ext = file.mimetype.split("/")[1];
    cb(null, `${prefix}-${file.fieldname}-${Date.now()}.${ext}`);
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
