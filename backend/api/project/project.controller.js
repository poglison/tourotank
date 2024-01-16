const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());


const projectHandler = require("./project.handler");

router.get("/", (req, res) => {
    projectHandler.getProject(req, res).then(dados => res.json(dados));
})

router.get("/:id", (req, res) => {
    projectHandler.getProjectID(req.params.id).then(dados => res.json(dados));
})

router.post("/", (req, res) => {
    projectHandler.saveProject(req, res).then(dados => res.json(dados));
})

router.put("/:id", (req, res) => {
    projectHandler.editProject(req, req.params.id).then(dados => res.json(dados));
})

router.delete("/:id", (req, res) => {
    projectHandler.deleteProject(req.params.id).then(dados => res.json(dados));
})


module.exports = router;