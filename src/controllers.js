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

  async deleteByTitle(title) {
    const delRes = await ToDoModel.deleteOne({ title: title });
    if (delRes.deletedCount > 0) {
      return `todo ${title} deleted`;
    }

    return `status ${title} not deleted`;
  }

  async updateByUser(user, body) {
    return ToDoModel.findOneAndUpdate({ user: user }, body, { new: true });
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
