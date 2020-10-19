require('dotenv').config();
const jwt = require('jsonwebtoken');


function isAuthenticated(req, res, next){
    const token = req.headers['authorization'];
    if (token) {
        try {
            const user = jwt.verify(token, `${process.env.SECRET}`);
            req.user = user;
            return next();
        } catch (error) {
           return  res.status(401).json("Não Autorizado");
        }
    }
   return  res.status(400).json('o token não foi informado');
}

module.exports = { isAuthenticated }