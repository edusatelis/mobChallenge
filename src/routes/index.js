const express = require('express');
const jwtConfig = require('./../config/controllers/jwt');
const AuthRouter =  require('./authRouter').AuthRouter;
const UserRouter =  require('./userRouter').userRouter;

function init(app) {

    const router = express.Router();

    /**
     * @description Todas as rotas autenticadas
     */
    app.use('/v1/users', jwtConfig.isAuthenticated, UserRouter);

 
    

    /**
     * @description Todas as rotas sem autenticação
     * @constructs
     */
    app.use('/auth', AuthRouter);

    
    
    /**
     * @constructs all routes
     */
    app.use(router);
}


module.exports = { init }