var express = require("express");
var router = express.Router();
const neworder = require("../controllers/neworder");
const admin = require("../controllers/admin");
const mongo = require("../controllers/mongo");

router.get("/", (req, res) => {
  res.status(200).send("okok");
});

router.get("/mongo", mongo.findAll);

router.post("/api/order", neworder.neworder);
router.get("/api/admin", admin.admin);

router.get("/test", (req, res) => {
  res.send("ok");
});

router.post("/test", (req, res) => {
  res.send("ok");
});

module.exports = router;
