const File = require("../models/file-model");

const createFile = async (file, owner) => {
  try {
    const newFile = await File.create({
      name: file.filename,
      owner: owner,
      isAvatar: true,
    });
    return newFile;
  } catch (err) {
    throw err;
  }
};

const deleteFile = async (username) => {
  try {
    await File.deleteMany({ owner: username });
  } catch (err) {
    throw err;
  }
};

const getFile = async (username) => {
  try {
    const file = await File.find({ owner: username, isAvatar: true });
    return file;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFile,
  deleteFile,
  getFile,
};
