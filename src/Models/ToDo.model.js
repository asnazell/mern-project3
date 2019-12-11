const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
  id: String,
  title: String,
  description: String,
  frequency: String,
  status: Boolean,
  user: String
});

const ToDo = mongoose.model("ToDo", ToDoSchema);

module.exports = ToDo;
