const express = require("express");
const cors = require("cors");
const top = require("./routes/top");
const edit = require("./routes/edit");
const todo = require("./routes/todo");

require("dotenv").config();

const app = express();

const PORT = 3000;

//フロント側との接続
app.use(
  cors({
    origin: process.env.FRONTPATH,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

//JSON形式で受け取る
app.use(express.json());
app.use("/mealplan/top", top);
app.use("/mealplan/edit", edit);
app.use("/mealplan/todo", todo);

//接続できているか確認
app.listen(PORT, () => {
  console.log("server run");
});
