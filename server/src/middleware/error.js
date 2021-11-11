const { HTTP_STATUS } = require("../constants");

const handleError = (err, res) => {
  const { statusCode, message } = err;
  console.log("HandleError message:", message);
  res.status(statusCode || HTTP_STATUS.NOT_FOUND).json({
    err: err,
    statusCode: statusCode,
    message: message,
  });
};

module.exports = {
  handleError,
};
