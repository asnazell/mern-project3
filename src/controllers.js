const ToDoModel = require("./models/ToDo.model");
const todoData = require("./models/todoSeed");

class ToDoControl {
  async reset() {
    await ToDoModel.deleteMany({});
    await ToDoModel.create(todolData);
    return "Reset Complete";
  }

  async newToDo(body) {
    let status = 0;
    let msg = "";

    try {
      await ToDoModel.create(body);
      status = 200;
      msg = "New ToDo Created";
    } catch (e) {
      status = 500;
      msg = e;
    }

    return { status: status, msg: msg };
  }

  async filterByFrequency(frequency) {
    return ToDoModel.find({ frequency: frequency });
  }

  async deleteById(id) {
    const delRes = await ToDoModel.deleteOne({ _id: id });
    if (delRes.deletedCount > 0) {
      return `todo ${id} deleted`;
    }

    return `status ${id} not deleted`;
  }

  async findId(id) {
    return ToDoModel.findById(id);
  }

  async updateById(id, body) {
    return ToDoModel.findOneAndUpdate({ _id: id }, body, { new: true });
  }

  async findAll() {
    return ToDoModel.find({});
  }

  async findAllToDoTitles() {
    const todoList = await this.findAll();

    return todoList.map(todo => {
      return todo.title;
    });
  }
}

module.exports = ToDoControl;
