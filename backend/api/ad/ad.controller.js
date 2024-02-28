const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());


const adHandler = require("./ad.handler");

router.get("/", (req, res) => {
    adHandler.getAd(req, res).then(dados => res.json(dados));
})

router.get("/:id", (req, res) => {
    adHandler.getAdID(req.params.id).then(dados => res.json(dados));
})

router.post("/", (req, res) => {
    adHandler.saveAd(req, res).then(dados => res.json(dados));
})

router.put("/:id", (req, res) => {
    adHandler.editAd(req, req.params.id).then(dados => res.json(dados));
})

router.delete("/:id", (req, res) => {
    adHandler.deleteAd(req.params.id).then(dados => res.json(dados));
})


module.exports = router;