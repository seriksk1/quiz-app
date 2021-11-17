const User = require("../models/user-model");
const AuthService = require("../services/auth-service");

const { HTTP_STATUS } = require("../constants");
const { QueryError } = require("../helpers/errorHandler");
const bodyValidator = require("../helpers/bodyValidator");

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
      user: {
        username: user.username,
        email: user.email,
        avatar: user.avatar,
      },
      message: "User logged in!",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUserToken,
};
