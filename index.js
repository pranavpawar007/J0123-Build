const express = require("express");
const { users } = require("./data/users.json");
const app = express();

const PORT = 8081;

app.use(express.json());

/*
routes: /users
method: get
description: get all the users
access: public
parameters: none

*/

app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is up and running",
    data: "hey",
  });
});

app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    data: users,
  });
});

app.get("*", (req, res) => {
  res.status(404).json({
    message: "This route is doesnt exists",
  });
});

app.listen(PORT, () => {
  console.log(`server is running at port : ${PORT}`);
});
