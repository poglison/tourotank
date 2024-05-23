const express = require("express");
const router = express.Router();

const user = require("./api/user/user.controller");
router.use("/user", user);

const ad = require("./api/ad/ad.controller");
router.use("/ad", ad);

const mp = require("./api/mp/index");
router.use("/mp", mp);

module.exports = router;