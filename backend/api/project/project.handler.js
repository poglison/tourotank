const crud = require("../../crud");
const bcrypt = require('bcryptjs');
const saltRounds = 10;

async function getProject() {
    const projects = await crud.get("project");
    return projects;
}

async function getProjectID(id) {
    const project = await crud.getID("project", id)
    return project;
}

async function saveProject(req, res) {

    if (!req.body.title && !req.body.description && !req.team) {
        return { status: "404", error: "001", message: "Você precisa preencher todos os campos..." }
    }

   
    const project = {
        ...req.body,
        created: new Date().toLocaleString(),
        updated: new Date().toLocaleString(),
        blocked: false,
    }

    return await crud.save("project", 0, project);
}

async function editProject(req, id) {
    return await crud.salvar("project", id, req.body);
}

async function deleteProject(id) {
    return await crud.remove("project", id);
}



module.exports = {
    getProject,
    getProjectID,
    saveProject,
    editProject,
    deleteProject,
}