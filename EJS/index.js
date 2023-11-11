import express from "express";
import ejs from "ejs";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.render("index.ejs", {dayType: "a weekday", advice: "it's time to work hard!"});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
