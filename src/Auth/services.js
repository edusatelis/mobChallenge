'use strict'
const Parse = require('parse/node');

const authService = {
    async  createUser(body){
        try {
            const user = new Parse.User()
            user.set('username', body.username);
            user.set('email', body.email);
            user.set('password', body.password);
            return user.signUp()
            
        } catch (err) {
            throw new Error(err);
        }
    },

    async auth(body){
        try {
            const sucess = await Parse.User.logIn(body.username,body.password)
            if(sucess.getUsername() === body.username)
                return sucess.getEmail();
        } catch (err) {
            throw new Error(err);
        }
        }
}


module.exports = { authService }