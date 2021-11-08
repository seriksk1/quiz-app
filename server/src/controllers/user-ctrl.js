const AuthService = require("../services/user-service");
const User = require("../models/user-model");
const bodyValidator = require("../helpers/bodyValidator");
const { HTTP_STATUS } = require("../constants");
const { QueryError } = require("../helpers/errorHandler");

const createUser = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    bodyValidator(req.body, "You must provide a body to create create");

    const oldUser =
      (await User.findOne({ email })) || (await User.findOne({ username }));
    if (oldUser) {
      throw new QueryError(HTTP_STATUS.CONFLICT, "User already exist!");
    }

    const newUser = await AuthService.createUser(email, password, username);

    res.status(HTTP_STATUS.CREATED).json({
      success: true,
      token: newUser.token,
      message: "User created!",
    });
  } catch (err) {
    next(err);
  }
};
const getUserToken = async (req, res, next) => {
  try {
    const { password, username } = req.body;
    bodyValidator(req.body, "You must provide a body to get token");

    const user = await User.findOne({ username });

    if (user) {
      user.token = await AuthService.getUserToken(username, password, user);
    } else {
      throw new QueryError(
        HTTP_STATUS.NOT_FOUND,
        "You are not registered yet!"
      );
    }

    res.status(HTTP_STATUS.OK).json({
      success: true,
      token: user.token,
      image: user.image,
      message: "User logged in!",
    });
  } catch (err) {
    next(err);
  }
};

const updateUserImage = async (req, res, next) => {
  try {
    const file = req.file.filename;
    const username = req.params.username;

    console.log("file", file);
    console.log("username", username);

    await AuthService.updateUserImage(username, file);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      file: file,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  getUserToken,
  updateUserImage,
};
