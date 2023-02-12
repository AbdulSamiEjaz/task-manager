const mongoose = require("mongoose")

function connectToDB(url) {
  mongoose.set("strictQuery", true)
  return mongoose.connect(url)
}

module.exports = {
  connectToDB,
}
