const crud = require("../../crud");
const bcrypt = require('bcryptjs');
const saltRounds = 10;

async function getAd() {
    const ad = await crud.get("ad");
    return ad;
}

async function getAdID(id) {
    const ad = await crud.getID("ad", id)
    return ad;
}

async function saveAd(req, res) {



    if (req.body.title && req.body.description && req.body.price && req.body.qtd) {
        const ad = {
            ...req.body,
            created: new Date().toLocaleString(),
            updated: new Date().toLocaleString(),
            blocked: false,
        }

        return await crud.save("ad", 0, ad);
    }

    return { status: "404", error: "001", message: "Você precisa preencher todos os campos" }

}

async function editAd(req, id) {
    return await crud.salvar("ad", id, req.body);
}

async function deleteAd(id) {
    return await crud.remove("ad", id);
}



module.exports = {
    getAd,
    getAdID,
    saveAd,
    editAd,
    deleteAd,
}