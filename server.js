const express = require("express");

const PORT = process.env.PORT || 8080;
// Start express server
const app = express();
// Serve static content from the public folder
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Import handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//Import routes
const routes = require("./controllers/burger_controller.js");

app.use(routes);
//Listen on port
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
