import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("short"));

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<p>${req.body["name"]} ${req.body["age"]}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
