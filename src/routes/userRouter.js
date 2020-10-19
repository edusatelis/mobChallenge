const userSrv = require('./../User/index');
const express = require('express');
const userRouter = express.Router();

userRouter.post('/createObj', userSrv.createObj);
userRouter.get('/getAllObj', userSrv.getAllObj);
userRouter.get('/getObj', userSrv.getObj);
userRouter.put('/updateObj', userSrv.update);
userRouter.delete('/deleteObj/:id', userSrv.deleteObj);




module.exports = { userRouter }