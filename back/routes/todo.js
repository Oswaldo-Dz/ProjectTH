const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("todo");
});

module.exports = router; 