import express from "express";
import users from "./data/users";

const app = express();

app.get("/api", (req, res) => {
  res.json("/users para obtener los usuarios");
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running at ${port}...`));
