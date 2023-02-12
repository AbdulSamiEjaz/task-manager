const express = require("express")

const {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("./task.controller")

const taskRouter = express.Router()

taskRouter.get("/", getAllTasks)
taskRouter.post("/", createTask)
taskRouter.get("/:id", getSingleTask)
taskRouter.patch("/:id", updateTask)
taskRouter.delete("/:id", deleteTask)

module.exports = taskRouter
