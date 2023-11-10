import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var result = "";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("short"));

function concatData(req, res, next) {
  result = "Name: " + req.body["name"] + " Age: " + req.body["age"];
  next();
}

app.use(concatData);

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<p>${result}<p>`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
