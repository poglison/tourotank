const crud = require("../../crud");
const users = require("../user/user.handler");
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

    users.getUserID(req.body.user.id).then(async (user) => {
        if (user.blocked) {
            return { status: "404", error: "003", message: "Você está bloqueado!" }
        }

        if (user.latestAd && new Date(user.latestAd).getTime() > new Date().getTime() - 60000) {
            user.latestAd = new Date().toLocaleString();
            users.editUser(user, user.id);


            if (req.body.title && req.body.description && req.body.price && req.body.qtd && req.body.image && req.body.user) {
                const ad = {
                    ...req.body,
                    created: new Date().toLocaleString(),
                    updated: new Date().toLocaleString(),
                    blocked: false,
                }

                return await crud.save("ad", 0, ad);
            } else{
                return { status: "404", error: "001", message: "Você precisa preencher todos os campos" }
            }
        } else {
            return { status: "404", error: "004", message: "Você precisa esperar 1 minuto para anunciar novamente!" }
        }

    });

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