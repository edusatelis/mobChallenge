const Parse = require('parse/node');

const userSrv = {
    
    async  createObject(body){
        const MyCustomClass = Parse.Object.extend(body.className);
        try {
            const myNewObject = new MyCustomClass();
            for(let i = 0; i < body.qtd; i++ ){
                myNewObject.set(body.atb[i], body.value[i]);
            }
            return myNewObject.save();
        } catch (error) {
            throw new Error(error);
        }
        
    },

    async getObject(body){
        try {
            const query = new Parse.Query(body['className']);
            const result = await query.find();
            if(result)
                return result;
        } catch (err) {
            throw new Error(err);
        }
    },

    async getUniqueObject(body){
        try {
            console.log(body.title);
            const query = new Parse.Query('Movies');
            const result = await query.get('title', body.title);
            if(result)
                console.log(result)
                return result;
        } catch (err) {
            throw new Error(err);
        }
    },

    async updateObj(body){
        try {
            const query = new Parse.Query('Movies');
            const obj = query.get(body.id).then(
                object => {
                    for(let i = 0 ; i < body.qtd; i++){
                        object.set(body.atb[i],body.value[i]);
                    }
                    
                    return object.save();
                }
            );
            return obj;
        } catch (err) {
            throw new Error(err);
        }
    },

    async deleteObj(id){
        try {
            const query = new Parse.Query('Movies');
            const obj = query.get(id).then(
                object => {        
                    return object.destroy();
                }
            );
            return obj;
        } catch (err) {
            throw new Error(err);
        }
    }
}
module.exports = {
    userSrv
}