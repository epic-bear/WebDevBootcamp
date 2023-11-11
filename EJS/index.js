import express from "express";
import ejs from "ejs";

const app = express();
const port = 4000;
var today;

function dayOfTheWeek(req, res, next) {
  if (new Date().getDay() < 6) {
    today = "weekday, it's time to work hard!";
  } else {
    today = "weekend, it's time to have fun!";
  }

  next();
}

app.use(dayOfTheWeek);

app.get("/", (req, res) => {
  res.send(`<h1>Hey! It's a ${today}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
