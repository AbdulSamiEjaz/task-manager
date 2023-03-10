const Task = require("../models/task.model")
const asyncWrapper = require("../middleware/async")

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
})

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(200).json({ task })
})

const getSingleTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })

  if (!task) {
    res.status(404).json({ err: `NO tasks with this id:${taskID}` })
  }

  res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })

  if (!task) {
    res.status(404).json({ msg: `No task with this id: ${taskID}` })
  }

  res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    runValidators: true,
    new: true,
  })

  if (!task) {
    res.status(404).json({ msg: `No task with this id: ${taskID}` })
  }

  res.status(200).json({ task })
})

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  getSingleTask,
  deleteTask,
}
