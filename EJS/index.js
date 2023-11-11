import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
const port = 4000;
let dayType = "a weekday";
let advice = "it's time to work hard!";


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  datOfTheWeek();
  res.render("index.ejs", {
    dayType: dayType,
    advice: advice,
  });
});

app.get("/list", (req, res) => {
  const data = {
    title: "Items",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<em>Some text</em>",
  };
  res.render("list.ejs", data);
});

app.get("/name", (req, res) => {
    res.render("yourname.ejs");
})

app.post("/name", (req, res) => {
    res.render("yourname.ejs", {
        nameLength: (req.body["fName"] + req.body["lName"]).length,
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

function datOfTheWeek() {
  let day = new Date().getDay();

  if (day === 0 || day === 6) {
    dayType = "a weekend";
    advice = "it's time to have some fun!";
  }
}