const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());

const user = require("./api/user/user.controller");
router.use("/user", user);

const project = require("./api/project/project.controller");
router.use("/project", project);

module.exports = router;