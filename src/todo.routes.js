const express = require("express");
const todoRouter = express.Router();

const ToDo = require("./controllers");
const ToDoList = new ToDo();

todoRouter.get("/", (req, res) => {
  res.send("ToDo works");
});

todoRouter.get("/find/:id", async (req, res) => {
  const result = await ToDoList.findId(req.params.id);
  res.send(result);
});

todoRouter.get("/all", async (req, res) => {
  const result = await ToDoList.findAll();
  res.send(result);
});

todoRouter.get("/reset", async (req, res) => {
  const resetResult = await ToDoList.reset();
  res.send(resetResult);
});

todoRouter.post("/new", async (req, res) => {
  const newRes = await ToDoList.newToDo(req.body);
  res.status(newRes.status).send(newRes.msg);
});

todoRouter.delete("/delete/:id", async (req, res) => {
  res.send(await ToDoList.deleteById(req.params.id));
});

todoRouter.put("/update/:id", async (req, res) => {
  const upRes = await ToDoList.updateById(req.params.id, req.body);

  console.log(upRes);

  res.json(upRes).send();
});

todoRouter.get("/find", async (req, res) => {
  res.json(await ToDoList.findAll()).send();
});

module.exports = todoRouter;
