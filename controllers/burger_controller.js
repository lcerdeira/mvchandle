const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

// Main page
router.get("/", function(req, res) {
  burger.all(function(data) {
    let burgerObj = {
      burgers: data
    };
    res.render("index", burgerObj);
  });
});


// Change burger state to devoured
router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;
  burger.update(condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



// Add new burger
router.post("/api/burgers", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    res.json({ id: result.insertId });
  });
});
// Export routes for server.js to use.
module.exports = router;