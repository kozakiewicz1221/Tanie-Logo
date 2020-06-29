var express = require("express");
var router = express.Router();
const neworder = require("../controllers/neworder");
const admin = require("../controllers/admin");

router.get("/", (req, res) => {
  res.status(200).send("okok");
});
router.post("/api/order", neworder.neworder);
router.get("/api/deleteorders", neworder.deleteorders);
router.get("/api/admin", admin.admin);

module.exports = router;
