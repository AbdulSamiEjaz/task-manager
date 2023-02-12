const errorHandlerMiddleware = (req, res, next, err) => {
  return res.status(500).json({ err })
}

module.exports = errorHandlerMiddleware
