var express = require("express");
var handlebars = require("express-handlebars");
var path = require("path");

const PORT = 8080;

// set up the engine
var app = express();
app.set("views", path.join(__dirname, "views/"));
app.engine(
  "hbs",
  handlebars({
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials"
  })
);
app.set("view engine", "hbs");

// do routing
app.get("/", function(req, res) {
  res.render("home");
  // res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/real-estate", function(req, res) {
  res.render("real-estate");
  // res.sendFile(path.join(__dirname + "/public/real-estate.html"));
});

app.get("/software", function(req, res) {
  res.render("software");
  // res.sendFile(path.join(__dirname + "/public/software.html"));
});

// start the server
app.listen(PORT, () => console.log(`Express server running on ${PORT}`));
