const FileService = require("../services/file-service");
const { HTTP_STATUS } = require("../constants");

const createFile = async (req, res) => {
  try {
    const owner = req.body.username;
    const file = req.file;

    await FileService.deleteFile(owner);

    const newFile = await FileService.createFile(file, owner);
    res.status(HTTP_STATUS.OK).json({ success: true, data: newFile });
  } catch (err) {
    console.log(err);
  }
};

const deleteFile = async (req, res) => {
  try {
    const username = req.params.username;
    await FileService.deleteFile(username);
    res.status(HTTP_STATUS.OK).json({ success: true });
  } catch (err) {
    console.log(err);
  }
};

const getFile = async (req, res) => {
  try {
    const username = req.params.username;
    const file = await FileService.getFile(username);
    res.status(HTTP_STATUS.OK).json({ success: true, data: file });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createFile,
  deleteFile,
  getFile,
};
