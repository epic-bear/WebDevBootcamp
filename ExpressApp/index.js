import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("main page");
});

app.get("/info", (req, res) => {
  res.send("info page");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
