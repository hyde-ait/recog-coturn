var express = require("express");
var shell = require("shelljs");

var app = express();
app.listen(process.env.PORT || 8080, () => {
  console.log("Server running on port 8080");
});
//api
app.get("/", (req, res, next) => {
  return res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

shell.exec("./start_coturn.sh");
