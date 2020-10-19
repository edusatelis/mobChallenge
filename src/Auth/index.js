require('dotenv').config();
const jwt = require('jsonwebtoken');

const authSrv = require('./services').authService

async function signup(req,res){
    try {
        const signup = await authSrv.createUser(req.body);
        if(signup)
            res.status(200).json(signup);
    } catch (error) {
            res.status(400).json(error.message)
        }
}

async function login(req,res){
    try {
        const login = await authSrv.auth(req.body)
        const token = jwt.sign({ email: login}, `${process.env.SECRET}`, {
            expiresIn: '60m'
        });
        if(login)
            res.status(200).json(token)
    } catch (error) {
        res.status(400).json(error.message);
    }
}


module.exports = {
    signup,
    login
}