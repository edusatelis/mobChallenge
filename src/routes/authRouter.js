const express = require('express');
const AuthSrv = require('./../Auth/index');
const AuthRouter = express.Router();


AuthRouter.post('/signup', AuthSrv.signup);
AuthRouter.post('/login', AuthSrv.login);


module.exports = { AuthRouter }