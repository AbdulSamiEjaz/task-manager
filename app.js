const express = require("express")
// const { startSession } = require("mongoose")
const app = express()
const { connectToDB } = require("./db/connect")
require("dotenv").config()
const PORT = process.env.PORT || 8000

const taskRouter = require("./routes/task.router")
const errorHandlerMiddleware = require("./middleware/error-handler")

app.use(express.static("./public"))
app.use(express.json())

app.use("/api/v1/tasks", taskRouter)
app.use(errorHandlerMiddleware)

// app.post("/post", (req, res) => {
//   res.json(req.body)
// })

async function start() {
  try {
    await connectToDB(process.env.MONGO_URI)
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log(error.message)
  }
}

start()
