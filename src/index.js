require('dotenv').config();
const express = require('express');
const app = express();
const Parse = require('parse/node');
const routes = require('./routes/index');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
routes.init(app);
Parse.serverURL = process.env.SERVER_URL; // This is your Server URL
Parse.initialize(
  process.env.APP_ID, // This is your Application ID
  process.env.JAVASCRIPT_KEY, // This is your Javascript key
  process.env.MASTER_KEY // This is your Master key (never use it in the frontend)
);

app.listen(process.env.PORT, ()=>{
    console.log(`server is running in port ${process.env.PORT}`);
});