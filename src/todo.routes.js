const express = require("express");
const todoRouter = express.Router();

const ToDo = require("./controllers");
const ToDoList = new ToDo();

todoRouter.get("/", (req, res) => {
  res.send("ToDo works");
});

todoRouter.get("/reset", async (req, res) => {
  const resetResult = await ToDoList.reset();
  res.send(resetResult);
});

todoRouter.post("/new", async (req, res) => {
  const newRes = await ToDoList.newToDo(req.body);
  res.status(newRes.status).send(newRes.msg);
});

todoRouter.delete("/delete/:title", async (req, res) => {
  res.send(await ToDoList.deleteByTitle(req.params.title));
});

todoRouter.put("/update/:user", async (req, res) => {
  const upRes = await ToDoList.updateByUser(req.params.user, req.body);

  console.log(upRes);

  res.json(upRes).send();
});

todoRouter.get("/find", async (req, res) => {
  res.json(await ToDoList.findAll()).send();
});

module.exports = todoRouter;
