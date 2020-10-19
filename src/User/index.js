const userSrv = require('./service').userSrv;

async function createObj(req, res){
    try {
        const create = await userSrv.createObject(req.body);
        if(create)
            res.status(200).json(create);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

async function getAllObj(req, res){
    try {
        const getAllObj = await userSrv.getObject(req.query);
        if(getAllObj)
            res.status(200).json(getAllObj);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

async function getObj(req,res){
    try {
        const getObj = await userSrv.getUniqueObject(req.query);
        if(getObj)
            res.status(200).json(getObj);
    } catch (error) {
            res.status(400).json(error.message);
    }
}

async function update(req,res){
    try {
        const updateObj = await userSrv.updateObj(req.body);
        if(updateObj)
            res.status(200).json('Atualizado com Sucesso');
    } catch (error) {
        res.status(400).json(error.msg);
    }
}

async function deleteObj(req, res){
    try {
        const deleteObj = await userSrv.deleteObj(req.params.id);
        if(deleteObj)
            res.status(204).json(deleteObj);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    createObj,
    getAllObj,
    getObj,
    update,
    deleteObj  
}