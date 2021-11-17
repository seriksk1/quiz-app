const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const getSignedToken = async (user_id, username) => {
  return await jwt.sign({ user_id, username }, process.env.TOKEN_KEY, {
    expiresIn: "2h",
  });
};

const getUserToken = async (username, password, user) => {
  try {
    if (await bcrypt.compare(password, user.password)) {
      return await getSignedToken(user._id, username);
    } else {
      throw new QueryError(
        HTTP_STATUS.BAD_REQUEST,
        "Wrong password or username"
      );
    }
  } catch (err) {
    throw err;
  }
};

module.exports = { getUserToken, getSignedToken };
