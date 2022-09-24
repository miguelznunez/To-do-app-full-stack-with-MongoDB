const errorHandler = (err, req, res, next) => {
  // Either grab and return the status code from the response or make it 500 server error
  const statusCode = res.statusCode ? res.statusCode : 500

  res.status(statusCode)

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack
  })
}

module.exports = {
  errorHandler
}