var express = require("express");
var router = express.Router();
const neworder = require("../controllers/neworder");

router.post("/api/order", neworder.neworder);
router.get("/api/deleteorders", neworder.deleteorders);

module.exports = router;
