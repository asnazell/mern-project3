require("dotenv").config();
require("../mongo");

const express = require("express");
const bodyParser = require("body-parser");
const todoRouter = require("./todo.routes");
const app = express();
const cors = require("cors");
const port = process.env.EXPRESS_PORT || 3000;
const host = process.env.EXPRESS_HOST || "0.0.0.0";

app.get("/", (req, res) => res.send("Hello World!"));

app.use(bodyParser.json());
app.use(cors());

app.use("/todo", todoRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
