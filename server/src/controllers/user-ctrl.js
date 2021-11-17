const User = require("../models/user-model");
const UserService = require("../services/user-service");

const { HTTP_STATUS } = require("../constants");
const { QueryError } = require("../helpers/errorHandler");
const bodyValidator = require("../helpers/bodyValidator");

const createUser = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    bodyValidator(req.body, "You must provide a body to create create");

    const oldUser =
      (await User.findOne({ email })) || (await User.findOne({ username }));
    if (oldUser) {
      throw new QueryError(HTTP_STATUS.CONFLICT, "User already exist!");
    }

    const newUser = await UserService.createUser(email, password, username);

    res.status(HTTP_STATUS.CREATED).json({
      success: true,
      token: newUser.token,
      message: "User created!",
    });
  } catch (err) {
    next(err);
  }
};

const updateUserImage = async (req, res, next) => {
  try {
    const file = req.file.filename;
    const username = req.params.username;

    await UserService.updateUserImage(username, file);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      file: file,
    });
  } catch (err) {
    next(err);
  }
};

const getUsersByName = async (req, res, next) => {
  try {
    const searchName = req.params.searchName;

    const foundUsers = await UserService.getUsersByName(searchName);
    console.log("getUsersByName:", foundUsers);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: foundUsers,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  updateUserImage,
  getUsersByName,
};
