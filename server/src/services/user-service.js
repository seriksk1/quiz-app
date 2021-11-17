const bcrypt = require("bcryptjs");

const User = require("../models/user-model");
const AuthService = require("./auth-service");

const { HTTP_STATUS } = require("../constants");
const { QueryError } = require("../helpers/errorHandler");
const { deleteFile } = require("../helpers/fileSystem");

const createUser = async (email, password, username) => {
  try {
    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      email,
      password: encryptedPassword,
      username,
    });

    newUser.token = await AuthService.getSignedToken(newUser._id, username);
    await newUser.save();

    return newUser;
  } catch (err) {
    throw new QueryError(HTTP_STATUS.BAD_REQUEST, "User is not created!");
  }
};

const updateUserImage = async (username, image) => {
  try {
    const { avatar: prevAvatar } = await User.findOne({ username });
    deleteFile(prevAvatar);
    await User.findOneAndUpdate({ username }, { avatar: image });
  } catch (err) {
    throw err;
  }
};

const getUsersByName = async (searchName) => {
  try {
    return await User.find({ username: { $regex: searchName } });
  } catch (err) {
    throw err;
  }
};

const getUser = async (name) => {
  try {
    const { username, avatar, email } = await User.findOne({ username: name });
    const publicUserData = { username, avatar, email };
    return publicUserData;
  } catch (err) {
    throw err;
  }
};

module.exports = { createUser, updateUserImage, getUsersByName, getUser };
