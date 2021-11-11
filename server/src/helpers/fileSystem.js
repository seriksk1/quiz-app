const fs = require("fs");

const deleteFile = async (image) => {
  await fs.unlink(`public/${image}`, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`${image} was deleted`);
    }
  });
};

const createFoldersByPath = (path) => {
  fs.exists(path, (exist) => {
    if (!exist) {
      return fs.mkdirSync(path, { recursive: true });
    }
  });
};

module.exports = {
  deleteFile,
  createFoldersByPath,
};
