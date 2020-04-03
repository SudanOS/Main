const express = require("express");
const app = express();
const routes = require("./API/routes");
const PORT = 5000 || process.env.PORT;
const Morgan = require("morgan");
const bodyParser = require("body-parser");
var dotenv = require("dotenv").config();
app.use(Morgan("common"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("welcome home");
});
routes(app);

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
