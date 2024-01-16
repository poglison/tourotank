const express = require("express");
const router = express.Router();

const user = require("./api/user/user.controller");
router.use("/user", user);

const project = require("./api/project/project.controller");
router.use("/project", project);

module.exports = router;