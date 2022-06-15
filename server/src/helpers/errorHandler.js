class QueryError extends Error {
  constructor(statusCode, message) {
    console.log(message);
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

module.exports = {
  QueryError,
};
