import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(morgan("short"));

app.get("/", (req, res) => {
  res.send("main page");
});

app.get("/info", (req, res) => {
  res.send("info page");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
